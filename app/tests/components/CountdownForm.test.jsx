var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit(el);
        expect(spy).toHaveBeenCalledWith(109);

    });
    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        countdownForm.refs.seconds.value = '';
        TestUtils.Simulate.submit(el);
        expect(spy).toNotHaveBeenCalled();

    });
})