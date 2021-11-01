import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  render() {
    return (
      <div className="fbTab">
        <div className="fbContainer">
          {this.props.Tab.map((elm) => {
            return (
              <div className="feedback" key={elm.id}>
                Name: {elm.name} | Department: {elm.department} | Rating: {elm.rating}
              </div>
            );
          })}
        </div>
        <div class="buttonBack">
          <button onClick={() => this.props.Tab1("form")} className="btnBack">
            Go back
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;