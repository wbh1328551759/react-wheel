import React, {ReactNode} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
  children?: ReactNode;
}

function Footer({className = '', style, children}: Props): React.ReactElement<Props>  {
  return (
    <div className={`wr-ui-footer ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Footer;
