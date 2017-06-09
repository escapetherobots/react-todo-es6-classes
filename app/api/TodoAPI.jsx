var $ = require('jquery');

module.exports = {

	filterTodos: function(todos, showCompleted, searchText){

		//filter by showCompleted
		var filteredTodos = todos.filter( (todo) => {
			return !todo.completed || showCompleted;
		});

		//filter by searchText
		filteredTodos = filteredTodos.filter( (todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});

		//sort Todos with non-completed first
		filteredTodos.sort( (a, b) => {
			if(a.completed === false && b.completed === true){
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		} );



		return filteredTodos;
	}

}