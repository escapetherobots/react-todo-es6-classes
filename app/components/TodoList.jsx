var React = require('react');
// connect to redux provider component
var { connect } = require('react-redux');

import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');


export class TodoList extends React.Component {


	render(){
		var { todos, showCompleted, searchText } = this.props;
		
		var renderTodos = () => {
			// get the filtered todos from the API
			var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

			if(filteredTodos.length === 0 ) {
				return <p className="container__message">Add a todo task!</p>
				
			} else {
				return filteredTodos.map( (todo) => {
					return (
						<Todo key={todo.id} {...todo} />
					);
				});

			}
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}

}

// connect will return state and pass it to your callback as an arg
export default connect(
	(state) => {
		//console.log(state);
		return state;
		// return {
		// 	todos: state.todos
		// };
	}
)(TodoList);