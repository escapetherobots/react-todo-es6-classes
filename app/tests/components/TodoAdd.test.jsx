var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// import * as = get all props and actions and places them in an object
import * as actions from 'actions';
// this is the default if you use require
//var TodoAdd = require('TodoAdd');
// this one is not "connected" to the store
//import { TodoAdd } from 'TodoAdd';
var { TodoAdd } = require('TodoAdd');

describe('Add Todo Component', () => {
	it('should exist', () => {
		expect(TodoAdd).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text', () => {
		var textTest = 'Go to store';
		//use imported action to call startAddTodo()
		var action = actions.startAddTodo(textTest);
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addField.value = textTest;
		TestUtils.Simulate.submit( $el.find('form')[0] );

		expect(spy).toHaveBeenCalledWith(action);

	});

	it('should not dispatch ADD_TODO when invalid todo text', () => {
		var textTest = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addField.value = textTest;
		TestUtils.Simulate.submit( $el.find('form')[0] );

		expect(spy).toNotHaveBeenCalled();

	});
});