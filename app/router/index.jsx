import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Main from 'Main';
import Login from 'Login';
import Extra from 'Extra';

import firebase from 'app/firebase/';


//Middleware for authentication
var requireLogin = (nextState, replace, next) => {
	// if not logged in
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
}

var redirectLogin = (nextState, replace, next) => {
	// if not logged in
	if(firebase.auth().currentUser){
		replace('/todos');
	}
	next();
}

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Login} onEnter={redirectLogin} />
			<Route path="todos" component={TodoApp} onEnter={requireLogin} />
			<Route path="extra" component={Extra} />
			<Route path="login" component={Login} />
		</Route>
	</Router>
);