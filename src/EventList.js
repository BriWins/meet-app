import React, { Component } from 'react';
import Event from './Event';
import { Container } from "react-bootstrap";

class EventList extends Component {
render() {
    const { events } = this.props;
    
return (
      <Container>
          <ul className="EventList">
            {events.map(event => 
              <li key={event.id}>
                <Event event={event}/>
              </li>
            )}
          </ul>
          </Container>
        );
    }
}

export default EventList;