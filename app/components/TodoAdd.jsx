var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export class TodoAdd extends React.Component {

	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		var text = this.refs.addField.value;
		var { dispatch } = this.props;
		

		if(text.length > 0) {
			// this.props.onAddTodo(item);
			// gets replaced with dispatch action
			dispatch(actions.startAddTodo(text));

			this.refs.addField.value = '';
		} else {
			this.refs.addField.focus();
		}

		

	}


	render(){

		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="addField" placeholder="Add a task"></input>
					<button className="button expanded btn-primary">Add</button>
				</form>
			</div>
		);
	}

}

// This component doesn't need any props from the state, just run this
// by running TodoApp through connect it adds the dispatch method 
// to this component as a prop!!!
export default connect()(TodoAdd);