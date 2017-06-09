//node-modules-----------------------
var uuid = require('uuid');
var moment = require('moment');
//======================================
//  reducer



//===============================================
export var searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;

		default:
			return state;
	};


};


//===============================================
export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;

		default:
			return state;
	};
};


//===============================================
export var todosReducer = (state = [], action) => {
	switch(action.type) {
		
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];

		case 'LOGOUT':
			return [];

		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];

		case 'UPDATE_TODO':
			return state.map( (item) => {
				if(item.id === action.id) {
					return {
						...item,
						...action.updates
					};
				} else {
					// if it doesn't match, just return the item obj unmodified!
					return item;
				}
			});

		case 'CLEAR_TODO':
			return state.filter( (item) => {
				if(item.id !== action.id) {
					return {
						...item
					};
				}
			});

		default:
			return state;
	};
};


//===============================================
export var authReducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOGIN':
			return {
				uid: action.uid
			};

		case 'LOGOUT':
			return {};

		default:
			return state;
	};
};


//===============================================
export var ztestReducer = (state = {}, action) => {
	switch(action.type) {
		case 'ZTEST':
			return {
				ztest: action.ztest
			};

		default:
			return state;
	};
};



// export var todoReducer = (state = [], action) => {
// 	switch(action.type){
// 		case 'SET_SEARCH_TEXT':
// 			return

// 		case 'ADD_TODO':
// 			return

// 		case 'TOGGLE_SHOW_COMPLETED':
// 			return

// 		case 'TOGGLE_SHOW_TODO'
// 			return

// 		default:
// 			return state;
// 	}


// };