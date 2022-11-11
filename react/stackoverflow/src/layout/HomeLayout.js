import React, {Component} from "react";
import {Button, Layout, message} from 'antd';
import CenterPage from "./CenterPage";
import {Link} from "react-router-dom";
import './styles/HomeLayout.css';
import {signOut} from "../api";

const {Header, Content} = Layout;
export default class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {signedIn: localStorage.getItem("token")}
  }

  onSignOut = () => {
    signOut().then(_ => {
      localStorage.removeItem("token");
      this.setState({signedIn: false});
      message.success("Sucessfully signed out");
    }).catch(_ => {
      localStorage.removeItem("token");
      this.setState({signedIn: false});
      message.error("Sign out failed");
    });
  }

  render() {
    return (
      <div className="stackoverflow-home-layout">
        <Layout>
          <Header className="stackoverflow-home-layout-header">
            {this.state.signedIn && <Button
              className="stackoverflow-home-layout-header-link"
              type="primary"
              onClick={this.onSignOut}>
              Sign out
            </Button>}
            <Link className="stackoverflow-home-layout-header-link" to="/post">Ask a question</Link>
          </Header>
          <Content>
            <CenterPage />
          </Content>
        </Layout>
      </div>
    );
  }
}