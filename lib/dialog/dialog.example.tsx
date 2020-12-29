import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

function dialogExample() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [x, setX] = useState<boolean>(false);
  const onModal = () => {
    const close = modal(
      <strong>
        你好 modal
        <button onClick={() => close()}>close</button>
      </strong>)
  }

  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setVisible(!isVisible)}>click</button>
        <Dialog
          visible={isVisible}
          buttons={[
            <button onClick={() => {setVisible(false);}}>1</button>,
            <button onClick={() => {setVisible(false);}}>2</button>,
          ]}
          onClose={() => {setVisible(false);}}
        >
          <div>1111</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          buttons={[
            <button onClick={() => {setX(false);}}>1</button>,
            <button onClick={() => {setX(false);}}>2</button>,
          ]}
          onClose={() => {setX(false);}}
          closeOnClickMask={false}
        >
          <div>1111</div>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('我是 alert')}>alert</button>
        <button onClick={() => confirm('1', () => {console.log('yes')}, () => {console.log('no')})}>
          confirm
        </button>
        <button onClick={onModal}>Modal</button>
      </div>
    </div>
  );
}

export default dialogExample;
