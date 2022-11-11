import {Component} from "react";
import PropTypes from 'prop-types';
import {Card} from "antd";
import UserBrief from "./UserBrief";
import './styles/TopExperts.css';

export default class TopExperts extends Component {
  static propTypes = {
    topExperts: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const expertList = this.props.topExperts.map(expert => (
      <UserBrief userDetail={expert} showQA={false} />
    ))
    return (
      <Card
        title="Top Experts"
        className="stackoverflow-top-experts-card"
      >
        {expertList}
      </Card>
    );
  }
}