import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    userInput: "",
  };

  handleUserInput = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0 && value <= 32) {
      this.setState({ numberOfEvents: value, errorAlert: "" });
    } else {
      this.setState({ errorAlert: "Select a number between 1 and 32" });
    } 
    this.props.updateEvents(undefined, value);
  };
    // if ( value <= 0 || value > 32) {
    //   this.setState({
    //     numberOfEvents: "",
    //     errorAlert: "Select a number between 1 and 32"
    //   }); 
    // } else {
    //     this.setState({
    //       numberOfEvents: value,
    //       errorAlert: ""
    //     })
    //   }
  
  render() {
    return (
      <div>
         <ErrorAlert class="numberOfEvents" text={this.state.errorAlert}/>
        <h5 id="events-number">Number of Events:</h5>
        <input
          className="default-input"
          id="user-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleUserInput}
        />
        <p></p>
      </div>
    );
  }
}

export default NumberOfEvents;