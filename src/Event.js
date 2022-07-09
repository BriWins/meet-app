
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

    const { event } = this.props;

    return (
    <div className="event">
      <h4 className="title">{event.summary}</h4>
      <p className="start-time">{event.start}</p>
      <p className="location">{event.location}</p>
      <p className="summary">{event.description}</p>
      <button className="btn-details" onClick={this.handleExpandDetail }>View Details</button>
      <button className="btn-collapse" onClick={this.handleCloseDetail}>Close Details</button>
    </div>
    );
  }
}
export default Event;