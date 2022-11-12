import React, {Component} from "react";
import './styles/UserBrief.css';
import PropTypes from "prop-types";

export default class UserBrief extends Component {
  static propTypes = {
    userDetail: PropTypes.object,
    /* qa: x answers, x questions, non-qa: 47 ups, collected */
    showQA: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.userDetail;
    const extraData = this.props.showQA ? (
      <p className="stackoverflow-user-brief-extra-data">
        {user ? user.answer_amount : '?'} Answers, {user ? user.question_amount : '?'} Question
      </p>
    ) : (
      <p className="stackoverflow-user-brief-extra-data">
        {user ? user.up_amount : '?'} ↑, collected
      </p>
    );
    return (
      <div className="stackoverflow-user-brief">
        <img src={user ? user.avatar : '/moonbird.png'} alt="avatar" />
        <div className="stackoverflow-user-brief-right-div">
          <p className="stackoverflow-user-brief-username">{user ? user.first_name : 'Unknown'}</p>
          {extraData}
        </div>
      </div>
    );
  }
}