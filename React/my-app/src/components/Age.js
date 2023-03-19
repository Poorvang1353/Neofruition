import React, { Component } from "react";

export default class Age extends Component {
  state = {
    age: 21,
  };

  handleAgeIncrement = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  handleAgeDecrement = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };

  render() {
    return (
      <>
        <p className="font-weight-bold">Your are : {this.state.age}</p>
        <button 
          className="btn btn-outline-success"
          onClick={this.handleAgeIncrement}
        >
         +
        </button> &nbsp;
        <button 
          className="btn btn-outline-success"
          onClick={this.handleAgeDecrement}
        >
          -
        </button>
      </>
    );
  }
}
