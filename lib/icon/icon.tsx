import React from 'react';
import './importIcons';
import classes from '../helpers/classes';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > .wr-icon{
    width: 1em;
    height: 1em;
  }
`

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({className, name, ...restProps}: IconProps) => {
  return (
    <Wrapper>
      <svg className={classes('wr-icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`}/>
      </svg>
    </Wrapper>
  );
};

export default Icon;
