var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });
    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            var buttons = TestUtils.scryRenderedDOMComponentsWithTag(controls, 'button');
            expect(buttons[0].textContent).toBe('Pause');
        });
        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            var buttons = TestUtils.scryRenderedDOMComponentsWithTag(controls, 'button');
            expect(buttons[0].textContent).toBe('Start');
        });
    })
});