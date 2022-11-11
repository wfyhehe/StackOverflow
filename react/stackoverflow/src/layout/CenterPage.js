import React, {Component} from "react";
import {Layout} from 'antd';
import Router from "./Router";
import About from "../component/About";
import './styles/CenterPage.css';
import TopExperts from "../component/TopExperts";

const {Header, Content, Sider} = Layout;
export default class CenterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isMobile: window.innerWidth < 768};
  }

  componentDidMount() {
    const resizeEvent = () => {
      if (window.innerWidth > 768) {
        this.setState({isMobile: false});
      } else {
        this.setState({isMobile: true});
      }
    }
    window.addEventListener('resize', resizeEvent);
  }

  getHardCodeExperts = () => {
    return [{
      first_name: 'Pseudo Near Expert',
      up_amount: 47,
      avatar: '/moonbird.png',
    }, {
      first_name: 'Near Expert',
      up_amount: 47,
      avatar: '/moonbird.png',
    }, {
      first_name: 'Bitcoin Maxi',
      up_amount: 47,
      avatar: '/moonbird.png',
    }, {
      first_name: 'Ethereum Maxi',
      up_amount: 47,
      avatar: '/moonbird.png',
    }];

  }

  render() {
    return (
      <div className="stackoverflow-center-page">
        <Header className="stackoverflow-center-page-header">
          <img className="stackoverflow-center-page-banner-image" src="/banner.jpg" alt="banner" />
        </Header>
        <Layout className="stackoverflow-center-page-layout">
          <Content className="stackoverflow-center-page-content">
            <Router />
          </Content>
          {this.state.isMobile ? (<Content
              className="stackoverflow-center-page-content"
              breakpoint="sm"
              onBreakpoint={broken => {
                this.setState({isMobile: broken});
              }}
            >
              <About expertCount={246} qnaCountInK={100} upvoteCountInK={50}
                     tokenAwardedInK={145} />
              <TopExperts topExperts={this.getHardCodeExperts()} />
            </Content>
          ) : (
            <Sider
              className="stackoverflow-center-page-sider"
            >
              <About expertCount={246} qnaCountInK={100} upvoteCountInK={50}
                     tokenAwardedInK={145} />
              <TopExperts topExperts={this.getHardCodeExperts()} />
            </Sider>
          )}
        </Layout>
      </div>
    );
  }
}