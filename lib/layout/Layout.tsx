import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Aside from './Aside';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  
  .wr-ui-header{
    margin-bottom: 4px;
  }
  
  .wr-ui-footer{
    margin-top: 4px;
  }
  
  &.hasAside{
    flex-direction: row;
    
    .wr-ui-layout{
      flex-direction: column;
    }
  }
  
  .wr-ui-content{
    flex-grow: 1;
    background: #0e8ee9;
  }
  
  .wr-ui-layout{
    flex-grow: 1;
    flex-direction: row;
    
    .wr-ui-layout{
      background: #0e8ee9;
    }
    
  }
  
  .wr-ui-aside{
    background: #3ba1e9;
  }
  
  .wr-ui-header, .wr-ui-footer{
    background: #7dbceb;
  }
`;

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

function Layout({className = '', style, children}: Props): React.ReactElement<Props> {
  const childrenAsArray = children as Array<ReactElement>;
  const hasAside = 'length' in childrenAsArray &&
    childrenAsArray.reduce((result, element) => result || element.type === Aside, false);

  return (
    <LayoutWrapper className={`wr-ui-layout ${className}${hasAside ? 'hasAside' : ''}`} style={style}>
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
export { Layout };
export { default as Header } from './Header';
export { default as Content } from './Content';
export { default as Aside } from './Aside';
export { default as Footer } from './Footer';
