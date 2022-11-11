import React, {Component} from "react";
import {Layout} from 'antd';
import CenterPage from "./CenterPage";
import {Link} from "react-router-dom";

const {Header, Content} = Layout;
export default class HomeLayout extends Component {
  render() {
    return (
      <div className="stackoverflow-home-layout">
        <Layout>
          <Header>
            <div className="stackoverflow-home-layout-header">
              <Link to="signin">Ask a question</Link>
            </div>
          </Header>
          <Content>
            <CenterPage />
          </Content>
        </Layout>
      </div>
    );
  }
}