import React, { useState } from "react";
import Dialog from "./dialog";

function dialogExample() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [x, setX] = useState<boolean>(false);
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setVisible(!isVisible)}>click</button>
        <Dialog
          visible={isVisible}
          buttons={[
            <button
              onClick={() => {
                setVisible(false);
              }}
            >
              1
            </button>,
            <button
              onClick={() => {
                setVisible(false);
              }}
            >
              2
            </button>,
          ]}
          onClose={() => {
            setVisible(false);
          }}
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
            <button
              onClick={() => {
                setX(false);
              }}
            >
              1
            </button>,
            <button
              onClick={() => {
                setX(false);
              }}
            >
              2
            </button>,
          ]}
          onClose={() => {
            setX(false);
          }}
          closeOnClickMask={false}
        >
          <div>1111</div>
        </Dialog>
      </div>
    </div>
  );
}

export default dialogExample;
