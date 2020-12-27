import React from 'react';
import styled from 'styled-components';
import {Icon} from '../index';

interface Props{
  visible: boolean;
  children: React.ReactElement;
}

const Mask = styled.div`
  &.wr-ui-dialog-mask{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
  }
`

const Content = styled.div`
  &.wr-ui-dialog {
    position: fixed;
    width: 10em;
    height: 10em;
    border-radius: 4px;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    &.wr-ui-dialog-close{
      
    }
    &.wr-ui-dialog-header{
    
    }
    &.wr-ui-dialog-main{
      
    }
    &.wr-ui-dialog-footer{
      
    }
  }
`

function Dialog({visible, children}: Props): React.ReactElement<Props>{
  return (
    <>
      {visible?
        <>
          <Mask className='wr-ui-dialog-mask'/>
          <Content className='wr-ui-dialog'>
            <div className='wr-ui-dialog-close'>
              <Icon name='close'/>
            </div>
            <header className='wr-ui-dialog-header'>提示</header>
            <main className='wr-ui-dialog-main'>{children}</main>
            <footer className='wr-ui-dialog-footer'>
              <button>ok</button>
              <button>cancel</button>
            </footer>
          </Content>
        </>
      : null}
    </>
  )
}

export default Dialog
