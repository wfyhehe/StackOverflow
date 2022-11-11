import {Component} from "react";
import PropTypes from 'prop-types';
import {Card} from "antd";
export default class About extends Component {
  static propTypes = {
    // TODO: some npm library convert num->xxk or xxM
    //        e.g. 11,345 -> 11k, 58,122,987 -> 58M
    expertCount: PropTypes.number,
    qnaCountInK: PropTypes.number,
    upvoteCountInK: PropTypes.number,
    tokenAwardedInK: PropTypes.number,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        title="About"
        className="stackoverflow-about-card"
      >
        <p>{this.props.expertCount} Experts</p>
        <p>{this.props.qnaCountInK}k Questions and Answers</p>
        <p>{this.props.upvoteCountInK}k Upvotes</p>
        <p>{this.props.tokenAwardedInK}k Token Awarded</p>
      </Card>
    );
  }
}