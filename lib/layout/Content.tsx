import React, {ReactNode} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
  children?: ReactNode;
}

function Content({className = '', style, children}: Props): React.ReactElement<Props> {
  return (
    <div className={`wr-ui-content ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Content;
