import React, { ReactElement } from "react";
import { Icon } from "../index";
import { Mask, Content } from "./Wrapper";
interface Props {
  visible: boolean;
  children: React.ReactElement;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

function Dialog({
  visible,
  children,
  buttons,
  onClose,
  closeOnClickMask = true,
}: Props): React.ReactElement<Props> {
  return (
    <>
      {visible ? (
        <>
          <Mask
            className="wr-ui-dialog-mask"
            onClick={closeOnClickMask ? onClose : undefined}
          />
          <Content className="wr-ui-dialog">
            <div className="wr-ui-dialog-close" onClick={onClose}>
              <Icon name="close" />
            </div>
            <header className="wr-ui-dialog-header">提示</header>
            <main className="wr-ui-dialog-main">{children}</main>
            <footer className="wr-ui-dialog-footer">
              {buttons.map((button: ReactElement, index: number) =>
                React.cloneElement(button, { key: index })
              )}
            </footer>
          </Content>
        </>
      ) : null}
    </>
  );
}

export default Dialog;
