import React, {Component} from "react";
import {Layout} from 'antd';
import CenterPage from "./CenterPage";
import {Link} from "react-router-dom";
import './styles/HomeLayout.css';

const {Header, Content} = Layout;
export default class HomeLayout extends Component {
  render() {
    return (
      <div className="stackoverflow-home-layout">
        <Layout>
          <Header className="stackoverflow-home-layout-header">
            <Link className="stackoverflow-home-layout-header-link" to="post">Ask a question</Link>
          </Header>
          <Content>
            <CenterPage />
          </Content>
        </Layout>
      </div>
    );
  }
}