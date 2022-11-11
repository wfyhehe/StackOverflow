import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import QuestionList from "../container/QuestionList";
import NewQuestion from "../container/NewQuestion";
import SignIn from "../container/SignIn";

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/post" element={<NewQuestion />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    );
  }
}