import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

//node-module-----------------------


//Components-----------------------
// !!!use import to get defaults attached to the Redux store
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';

//API-----------------------
// the API is now accessed from the TodoList component!
//var TodoAPI = require('TodoAPI');

export class TodoApp extends React.Component {

	onLogout(e) {
		e.preventDefault;
		var {dispatch} = this.props;
		dispatch(actions.startLogout());
	}

	// getInitialState() {
	// 	return {
	// 		showCompleted: false,
	// 		searchText: '',
	// 		todos: TodoAPI.getTodos() 
	// 	}
	// },

	// handleAddTodo(todo){
	// 	this.setState({
	// 		todos: [
	// 			...this.state.todos,
	// 			{
	// 				id: uuid(),
	// 				text: todo,
	// 				completed: false,
	// 				createdAt: moment().unix(),
	// 				completedAt: undefined
	// 			}
	// 		]
	// 	})
	// },

	// handleSearch(showCompleted, searchText){
	// 	this.setState({
	// 		showCompleted: showCompleted,
	// 		searchText: searchText.toLowerCase()
	// 	});
	// },

	// handleClearTodo(id){
	// 	// filter out the object based on it's id
	// 	var filteredTodos = this.state.todos.filter( (item) => {
	// 		return item.id !== id;
	// 	});

	// 	this.setState({
	// 		todos: filteredTodos
	// 	});
	// },

	// componentDidUpdate(prevProps, prevState) {
	// 	//when the state updates run API to local storage!
	// 	TodoAPI.setTodos(this.state.todos);
	// },	

	render() {
		//var {todos, showCompleted, searchText} = this.state;
		//var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		// the components now know how to render themselves - via Redux!

		return (
			<div>
				<a href='#' onClick={this.onLogout.bind(this)}>Logout</a>
				<h1 className="page-title">TODO APP</h1>
				
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-6">
						<div className="container">
							<TodoSearch />
							<TodoList />
							<TodoAdd />
						</div>	

					</div>
				</div>
			</div>
		);
	}

}

export default Redux.connect()(TodoApp);