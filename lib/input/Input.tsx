import React, { InputHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.input`
  &.wr-input{
    border: 1px solid #ddd;
    line-height: 22px;
    padding: 4px 8px;
    border-radius: 4px;
    
    &:focus{
      outline: none;
      border-color: #ff5757;
      box-shadow: 0 0 0 2px rgba(255, 87, 87, 0.5);
      transition: box-shadow .25s;
    }
  }
`;

const Input = (props: Props): React.ReactElement<Props> => {
  const {className, ...rest} = props;
  return (
    <InputWrapper className={classes('wr-input', className)} {...rest}/>
  );
};

export default Input;
