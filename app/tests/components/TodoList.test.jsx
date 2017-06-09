var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList Component', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	//Rendering components with SCRY is currently not working
	it('should render one component for each todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'do something',
				completed: false,
				completedAt: undefined,
				createAt: 500
			},
			{
				id: 2,
				text: 'do something else',
				completed: false,
				completedAt: undefined,
				createAt: 500
			}
		];

		// create the store from the configureStore file, passing in this initial state as arg
		var store = configure({
			todos
		});

		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList />
			</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});