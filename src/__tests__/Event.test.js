import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event/> component', () => {
   let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render event title', () => {
        expect(EventWrapper.find('.title')).toHaveLength(1);
    });

    test('render event start time', () => {
        expect(EventWrapper.find('.start-time')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });
    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render expand details button', () => {
        expect(EventWrapper.find('.btn-details')).toHaveLength(1);
    });

    test('render hide details button', () => {
        expect(EventWrapper.find('.btn-collapse')).toHaveLength(1);
    });

    test('event is collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    test('expand details on click', () => {
        EventWrapper.setState({ collapsed: false });
        EventWrapper.find('.btn-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('collapse event details on click', () => {
        EventWrapper.setState({ collapsed: false });
        EventWrapper.find('.btn-collapse').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
      });


});