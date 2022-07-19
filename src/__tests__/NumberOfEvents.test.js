import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>)
    })

    test('render textbox', () => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} /> );
    })

    test('render 32 events by default', () => {
        expect(NumberOfEventsWrapper.find('.default-input').get(0).props.value).toEqual(32);
    })

    test('user can change the number of events', () => {
        NumberOfEventsWrapper.find('#user-number-input').simulate('change', {
          target: { value: 10 },
        });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
      });

    test('user has to specify at least one event', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
      NumberOfEventsWrapper.find('#events-number').simulate('change', {
        target: { value: -1 },
      });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
      });

})