import {Component} from "react";
import {Button, Form, Input, message, Space} from "antd";
import {signIn} from "../api";
import './styles/SignIn.css';
import {Link} from "react-router-dom";

export default class SignIn extends Component {
  componentDidMount() {
    const next = this.getNext();
    if (next && next === '/post') {
      message.info('Sign in to ask a question');
    }
  }

  getNext = () => {
    const queryObj = new window.URLSearchParams(window.location.search);
    return queryObj.get('next') || '/';
  }

  onFinish = valueObj => {
    signIn(valueObj.username, valueObj.password).then(data => {
      localStorage.setItem('token', data.data.token);
      window.location.href = this.getNext();
    }).catch(err => {
      localStorage.removeItem('token');
      message.error('Incorrect username or password');
    })
  };

  render() {
    return (
      <div className="stackoverflow-sign-in">
        <Link to="/">←</Link>
        <Form
          name="basic"
          labelCol={{span: 8, offset: 0}}
          wrapperCol={{span: 12, offset: 0}}
          onFinish={this.onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{required: true, message: "Please input your username!"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{required: true, message: "Please input your password!"}]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 16, span: 16}}>
            <Space>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    );
  }
}