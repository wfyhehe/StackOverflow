import {Component} from "react";
import {message} from "antd";
import {listQuestion} from "../api";
import QuestionCard from "../component/QuestionCard";

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
  }

  componentDidMount() {
    listQuestion().then(data => {
      // const questions = data.data.map(q => {
      //   console.log(q);
      //   return q;
      // });
      // console.log(questions);
      this.setState({questions: data.data});
    }).catch(err => {
      message.error("Failed to load questions");
    });
  }

  render() {
    const listQuestions = this.state.questions.map(question =>
      <QuestionCard
        title={question.title}
        content={question.content}
        author={question.author}
        createdAt={question.created_at}
      />
    );
    return (
      <div className="stackoverflow-question-list">
        {listQuestions}
      </div>
    );
  }
}