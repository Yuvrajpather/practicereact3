import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Feedback from "./components/Feedback";

class App extends Component {
  state = {
    employee: [],
    display: "form",
  };

  fnFeedback = (name, department, rating) => {
    let arg1 = [...this.state.employee];
    let empState = {id: this.state.employee.length, name, department, rating,};
    arg1.push(empState);
    this.setState({ employee: arg1, display: "feedback" });
  };

  Tab1 = (tab) => {
    this.setState({ display: tab });
  };

  render() {
    return (
      <div className="App">
        {this.state.display === "form" ? (
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        ) : this.state.display === "feedback" ? (
          <h1>EMPLOYEE FEEDBACK DATA</h1>
        ) : null}
        {this.state.display === "form" ? (
          <Form fbElement = {this.fnFeedback} />
        ) : (
          <Feedback
            Tab = {this.state.employee}
            Tab1 = {this.Tab1}
          />
        )}
      </div>
    );
  }
}

export default App;