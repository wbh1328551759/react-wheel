import React from "react";
import ReactDom from "react-dom";
// import Button from "./button";
import Icon from "./icon/icon";

ReactDom.render(
  <div>
    <Icon name="wechat"
          // className='ffffff'
          onClick={(e) => console.log(e)}
          onMouseDown={() => console.log('mouseDown')}
          onMouseMove={() => console.log('move')}/>
    <Icon name="alipay" />
    <Icon name="QQ" />
  </div>,
  document.querySelector("#root")
);
