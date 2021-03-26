import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/Layout.example';
import { Layout, Aside, Header, Content, Footer } from './lib/layout/Layout';
import './example.scss'

ReactDOM.render((
  <Router>
    <Layout className="page">
      <Header style={{background: 'none'}}>
        <div className="logo">
          <img src="./logo.png" width={200} alt=""/>
        </div>
      </Header>
      <Layout>
        <Aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to={'/icon'}>Icon</Link>
            </li>
            <li>
              <Link to={'/button'}>Button</Link>
            </li>
            <li>
              <Link to={'/dialog'}>Dialog</Link>
            </li>
            <li>
              <Link to={'/layout'}>Layout</Link>
            </li>
          </ul>
        </Aside>
        <Content>
          <Route path={'/icon'} component={IconExample}/>
          <Route path={'/button'} component={ButtonExample}/>
          <Route path={'/dialog'} component={DialogExample}/>
          <Route path={'/layout'} component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer>
        footer
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));
