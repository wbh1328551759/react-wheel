import React from "react";
import ReactDom from "react-dom";
// import Button from "./button";
import Icon from "./icon";

ReactDom.render(
  <div>
    <Icon name="wechat" />
    <Icon name="alipay" />
    <Icon name="QQ" />
  </div>,
  document.querySelector("#root")
);
