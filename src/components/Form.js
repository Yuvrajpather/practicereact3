import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  fbSubmit = () => {
    let employeeName = document.getElementById("eName");
    let employeeDepartment = document.getElementById("eDep");
    let employeeRating = document.getElementById("eRate");
    this.props.fbElement(
      employeeName.value,
      employeeDepartment.value,
      employeeRating.value
    );
    employeeName.value = "";
    employeeDepartment.value = "";
    employeeRating.value = "";
  };

  render() {
    return (
      <div className="formContainer">
        <form
          className="fbForm"
          onSubmit={(r1) => {
            r1.preventDefault();
            this.fbSubmit();
          }}
        >
          <div>
            <label htmlFor="eName">NAME:</label>
            <input type="text" id="eName" required></input>
          </div>
          <div>
            <label htmlFor="eDep">DEPARTMENT:</label>
            <input type="text" id="eDep" required></input>
          </div>
          <div>
            <label htmlFor="eRate">RATING:</label>
            <input type="number" id="eRate" required></input>
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
          <div></div>
        </form>
      </div>
    );
  }
}

export default Form;