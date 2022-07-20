import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  parseDate(date) {
    let eventDate = new Date(date);
    let day = eventDate.toLocaleDateString((undefined, { timeZone: "UTC" }));
    let time =
      eventDate.getHours() + ":" + ("0" + eventDate.getMinutes()).slice(-2);
    return day + " |  " + time;
  }
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h4 className="title">{event.summary}</h4>
        <p className="start-time">
          {this.parseDate(event.start.dateTime)} ({event.start.timeZone})
        </p>
        <p className="location">{event.location}</p>

        <button className="btn-details" onClick={this.handleClick}>
          {!this.state.collapsed ? "Close Details" : "View Details"}
        </button>
        {!this.state.collapsed && (
          <p className="event-description">{event.description}</p>
        )}
      </div>
    );
  }
}
export default Event;