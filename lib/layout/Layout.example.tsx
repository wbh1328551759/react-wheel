import React from 'react';
import Layout from './Layout';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';
import Aside from './Aside';

function LayoutExample(): React.ReactElement {
  return (
    <>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: '500px', width: '500px'}}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: '500px', width: '500px'}}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: '500px', width: '500px'}}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: '500px', width: '500px'}}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>

  );
}

export default LayoutExample;
