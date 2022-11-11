import {Component} from "react";
import {Button, Form, Input, Space} from "antd";
import {signIn} from "../api";

export default class SignIn extends Component {

  onFinish = (valueObj) => {
    signIn(valueObj.username, valueObj.password).then(data => {
      localStorage.setItem('token', data.data.token);
    }).catch(err => {
      localStorage.removeItem('token');
    })
  };

  render() {
    return (
      <div className="stackoverflow-sign-in">
        <Form
          name="basic"
          labelCol={{span: 8, offset: 0}}
          wrapperCol={{span: 8, offset: 0}}
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
          <Form.Item wrapperCol={{offset: 8, span: 16}}>
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