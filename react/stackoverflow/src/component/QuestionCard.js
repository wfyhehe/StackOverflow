import React, {Component} from "react";
import './styles/QuestionCard.css';
import PropTypes from "prop-types";
import UserBrief from "./UserBrief";

export default class QuestionCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stackoverflow-question-card">
        <div className="stackoverflow-question-card-upper">
          <p className="stackoverflow-question-card-title">{this.props.title}</p>
          <p className="stackoverflow-question-card-content">{this.props.content}</p>
        </div>
        <div className="stackoverflow-question-card-lower">
          <UserBrief userDetail={this.props.author} showQA={true} />
        </div>
      </div>
    );
  }
}