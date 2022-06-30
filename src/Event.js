
import React, { Component } from "react";

class Event extends Component {

  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.state.collapsed
    ? this.setState({ collapsed: false }) 
    : this.setState({ collasped: true });
  }

  render() {

    return (
    <div className="event">
      <h4 className="title"></h4>
      <p className="start-time"></p>
      <p className="location"></p>
      <button className="btn-details" onClick= {() => this.handleClick}></button>
    </div>
    );
  }
}
export default Event;