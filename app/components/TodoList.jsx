var React = require('react');
// connect to redux provider component
var { connect } = require('react-redux');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');


export var TodoList = React.createClass({


	render: function(){
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

});

// connect will return state and pass it to your callback as an arg
export default connect(
	(state) => {
		console.log(state);
		return state;
		// return {
		// 	todos: state.todos
		// };
	}
)(TodoList);