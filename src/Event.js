import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
        <Card className="event" style={{ width: '18rem' }}>
            <Card.Body className=" mb-0">
              <Card.Header as="h5" className="title">{event.summary}</Card.Header>
                  <Card.Text className="start-time pt-2">
                    {this.parseDate(event.start.dateTime)} ({event.start.timeZone})
                  </Card.Text>
                      <p className="location">{event.location}</p>
                      <Button className="btn-details" onClick={this.handleClick}>
                        {!this.state.collapsed ? "Close Details" : "View Details"}
                      </Button>
                  {!this.state.collapsed && (
                    <p className="event-description">{event.description}</p>
                  )}
            </Card.Body>
        </Card>
    );
  }
}
export default Event;