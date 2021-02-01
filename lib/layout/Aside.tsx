import React, {ReactNode} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
  children?: ReactNode;
}

function Aside({className = '', style, children}: Props): React.ReactElement<Props> {
  return (
    <div className={`wr-ui-aside ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Aside;
