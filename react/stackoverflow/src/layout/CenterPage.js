import React, {Component} from "react";
import {Layout} from 'antd';
import Router from "./Router";
import About from "../component/About";

const {Header, Content, Sider} = Layout;
export default class CenterPage extends Component {
  render() {
    return (
      <div className="stackoverflow-center-page">
        <Layout>
          <Header>
            banner
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