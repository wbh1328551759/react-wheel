import React, { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  level: 'important' | 'danger' | 'normal';
}


const Button = (props: Props): React.ReactElement<Props>  => {
  const {className, children, level, ...rest} = props
  return (
    <button
      className={classes('wr-button', `wr-button-${level}`, className)}
      {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  level: 'normal'
}

export default Button
