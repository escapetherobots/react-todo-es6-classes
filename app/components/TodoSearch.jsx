var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({


	// handleSearch(){
	// 	var searchText = this.refs.searchField.value;
	// 	var showCompleted = this.refs.showCompleted.checked;
		
	// 	// redux use dispatch not props pass down method
	// 	//this.props.onSearch(showCompleted, searchText);
	// 	var { dispatch } = this.props;
	// 	dispatch(actions.setSearchText(searchText, showCompleted));
	// },

	

	render: function(){
		var { dispatch, showCompleted, searchText } = this.props;

		var renderCheckBox = () => {
			return (
				<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={ () => {
							dispatch(actions.toggleShowCompleted());
						}} />
						Show completed todos
					</label>
			);
		}


		return (
			<div className="container__header">
				<div >
					<input type="search" ref="searchField" value={searchText} onChange={ () => {
						dispatch(actions.setSearchText(this.refs.searchField.value));
					}} placeholder="Search for todo"></input>
				</div>
				<div>
					{renderCheckBox()}
				</div>
			</div>
		);
	}

});

//module.exports = TodoSearch;

// get values from state!!!
export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		};
	}
)(TodoSearch);