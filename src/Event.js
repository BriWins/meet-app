
import React, { Component } from "react";

class Event extends Component {

  state = {
    collapsed: true 
  }

  handleExpandDetail = () => {
   this.setState({ collapsed: false }); 
  };

  handleCloseDetail = () => {
   this.setState({ collapsed: true }); 
  };

  render() {

    return (
    <div className="event">
      <h4 className="title"></h4>
      <p className="start-time"></p>
      <p className="location"></p>
      <p className="summary"></p>
      <button className="btn-details" onClick={this.handleExpandDetail }></button>
      <button className="btn-collapse" onClick={this.handleCloseDetail}></button>
    </div>
    );
  }
}
export default Event;