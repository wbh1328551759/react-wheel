import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/Layout.example';
import { Layout, Aside, Header, Content, Footer } from './lib/layout/Layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';


ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src="./logo.png" width={120} alt=""/>
          <span>A useful UI framework</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件 </h2>
          <ul>
            <li>
              <NavLink to={'/icon'}>Icon</NavLink>
            </li>
            <li>
              <NavLink to={'/button'}>Button</NavLink>
            </li>
            <li>
              <NavLink to={'/dialog'}>Dialog</NavLink>
            </li>
            <li>
              <NavLink to={'/layout'}>Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path={'/icon'} component={IconDemo}/>
          <Route path={'/button'} component={ButtonExample}/>
          <Route path={'/dialog'} component={DialogExample}/>
          <Route path={'/layout'} component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 吴炳浩
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'));
