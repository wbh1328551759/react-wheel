import React from "react";

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return <span>{props.name}</span>;
};

export default Icon;
