import React from 'react';
import './importIcons';
import classes from './helpers/classes';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({className, name, ...restProps}: IconProps) => {
  return (
    <svg className={classes('wr-icon', className)}
         {...restProps}>
      <use xlinkHref={`#${[name]}`}/>
    </svg>
  );
};

export default Icon;
