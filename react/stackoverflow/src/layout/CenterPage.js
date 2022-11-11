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
        <Layout>
          <Header className="stackoverflow-center-page-banner-wrapper">
            <img className="stackoverflow-center-page-banner-image" src="/banner.jpg" alt="banner"/>
          </Header>
          <Content>
            <Router />
            <Sider>
              <About />
            </Sider>
          </Content>
        </Layout>
      </div>
    );
  }
}