var React = require('react');
var React = require('react');
var moment = require('moment');

// connect to redux actions
var { connect } = require('react-redux');
var actions = require('actions');


export var Todo = React.createClass({

	render: function(){
		var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created: ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed: ' ; 
				timestamp = completedAt;

				return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		}

		return (
			<div className={todoClassName}>
				<div className="todo__title" onChange={ () => {
					//this.props.onToggle(id);
					dispatch(actions.startToggleTodo(id, !completed));
				}}>
					<div>
						<input type="checkbox" defaultChecked={completed} />
						<p>{text}</p>
					</div>
					<div className="todo__subtext">
						<p>{renderDate()}</p>
					</div>

				</div>
				<div className="todo__clear-item" onClick={ () => {
					dispatch(actions.startClearTodo(id));
					//this.props.onClickClear(id);
				}} >
					<button className="button tiny hollow" >Clear</button>
				</div>
				
			</div>
		);
	}

});

// connect to redux to dispatch actions to reducer
export default connect()(Todo);