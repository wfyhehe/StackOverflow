import {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Card, Form, Input, message, Space} from 'antd';
import {postQuestion} from "../api";

export default class QuestionList extends Component {
  onFinish = valueObj => {
    postQuestion(valueObj.title, valueObj.content).then(data => {
      window.location.href = '/';
    }).catch(err => {
      message.error("failed to post question");
    })
  };

  render() {
    // TODO: use a store like Redux to store user status signed in or not
    if (!localStorage.getItem('token')) {
      window.location.href = '/signin?next=/post';
      return;
    }
    return (
      <Card
        className="stackoverflow-new-question"
        title="New Question"
        extra={<Link to="/">Close</Link>}
      >
        <Form
          name="basic"
          labelCol={{span: 8, offset: 0}}
          wrapperCol={{span: 8, offset: 0}}
          onFinish={this.onFinish}
          autoComplete="off"
        >
          <Form.Item name="title">
            <Input placeholder="Enter the question title" />
          </Form.Item>
          <Form.Item name="content">
            <Input.TextArea rows={4} placeholder="Write your question here" />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Space>
              <Button type="primary" htmlType="submit">
                Post
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}