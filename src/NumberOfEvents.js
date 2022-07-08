import React, { Component } from 'react';

export class NumberOfEvents extends Component {

        state = {
            numberOfEvents: 32,
            userInput: '',
        };

        handleUserInput = (event) => {
            const value = event.target.value;
            if (!isNaN(value) && value >= 0 && value <= 32) {
              this.setState({ numberOfEvents: value, ErrorText: '' });
            } else {
              this.setState({ ErrorText: 'Please select at least one event.' });
            }
          };
        
    render(){
        return (
            <div>
                <h5 id="events-number">Number of Events:</h5>
                <input
                className="default-input"
                id="user-number-input"
                value={this.state.numberOfEvents || this.state.userInput}
                onChange={this.handleUserInput}
                />
                <p></p>
            </div>
        )
    }
}

export default NumberOfEvents;