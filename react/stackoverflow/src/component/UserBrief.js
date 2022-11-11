import React, {Component} from "react";
import './styles/UserBrief.css';
import PropTypes from "prop-types";

export default class UserBrief extends Component {
  static propTypes = {
    userDetail: PropTypes.object.isRequired,
    /* qa: x answers, x questions, non-qa: 47 ups, collected */
    showQA: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.userDetail;
    const extraData = this.props.showQA ? (
      <p className="stackoverflow-question-card-content">
        {user ? user.answer_amount : '?'} Answers, {user ? user.question_amount : '?'} Question
      </p>
    ) : (
      <p className="stackoverflow-question-card-content">
        {user ? user.up_amount : '?'} ↑, collected
      </p>
    );
    return (
      <div className="stackoverflow-user-brief">
        <img src={user ? user.avatar : '/moonbird.png'} alt="avatar" />
        <div className="stackoverflow-question-card-upper">
          <p className="stackoverflow-user-brief-username">{user ? user.first_name : 'Unknown'}</p>
          {extraData}
        </div>
      </div>
    );
  }
}