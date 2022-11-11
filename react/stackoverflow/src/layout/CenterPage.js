import React, {Component} from "react";
import {Layout} from 'antd';
import Router from "./Router";
import About from "../component/About";
import './styles/CenterPage.css';

const {Header, Content, Sider} = Layout;
export default class CenterPage extends Component {
  render() {
    return (
      <div className="stackoverflow-center-page">
        <Header className="stackoverflow-center-page-header">
          <img className="stackoverflow-center-page-banner-image" src="/banner.jpg" alt="banner" />
        </Header>
        <Layout className="stackoverflow-center-page-layout">
          <Content>
            <Router />
          </Content>
          <Sider>
            <About />
          </Sider>
        </Layout>
      </div>
    );
  }
}