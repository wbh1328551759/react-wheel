import React, {ReactNode} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
  children?: ReactNode;
}

function Header({className = '', style, children}: Props): React.ReactElement<Props> {
  return (
    <div className={`wr-ui-header ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Header;
