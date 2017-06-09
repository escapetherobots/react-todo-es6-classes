var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// old process to load component
//var TodoSearch = require('TodoSearch');
import { TodoSearch } from 'TodoSearch';

describe('Add Todo Search Component', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		var searchText = 'dog';
		var action = {
			type: "SET_SEARCH_TEXT",
			searchText
		}
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

		todoSearch.refs.searchField.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchField);

		expect(spy).toHaveBeenCalledWith(action);
	});


	it('should dispatch TOGGLE_SHOW_COMPLETED on checkbox checked', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

		todoSearch.refs.showCompleted.checked = true;

		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});
});