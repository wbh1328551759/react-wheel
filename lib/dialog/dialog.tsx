import React, {ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {Mask, Content} from './Wrapper';

interface Props {
  visible: boolean;
  children: ReactNode | ReactFragment;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

function Dialog({visible, children, buttons, onClose, closeOnClickMask = true,}: Props): React.ReactElement<Props> {
  const component = visible ?
    <>
      <Mask
        className="wr-ui-dialog-mask"
        onClick={closeOnClickMask ? onClose : undefined}
      />
      <Content className="wr-ui-dialog">
        <div className="wr-ui-dialog-close" onClick={onClose}>
          <Icon name="close"/>
        </div>
        <header className="wr-ui-dialog-header">提示</header>
        <main className="wr-ui-dialog-main">{children}</main>
        {buttons && buttons.length > 0 &&
        <footer className="wr-ui-dialog-footer">
          {buttons.map((button: ReactElement, index: number) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
        }
      </Content>
    </> : null;

  return (
    ReactDOM.createPortal(component, document.body)
  );
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div); //销毁相关事件
    div.remove();
  };
  const component =
    <Dialog visible={true}
            onClose={() => {
              onClose();
              afterClose && afterClose();
            }}
            buttons={buttons}
    >
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);

  return onClose;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
};


export {alert, confirm, modal};

export default Dialog;
