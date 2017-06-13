import React from 'react';
//* as imports all props from the imported item
import * as Redux from 'react-redux';

import * as actions from 'actions';


// this is the un-connected version -- for tests
export class Login extends React.Component {

	onLogin() {
		var {dispatch} = this.props;

		dispatch(actions.startLogin());
	}

	render() {
		return (
			<div>
				<h1 className="page-title">Todo App Login</h1>
				<div className="row">
					<div className="columns small-centered small-10  medium-6 large-4">
						<div className="callout callout-auth">
							<h3>Login</h3>
							<p>
								Login with Github account below.
							</p>
							<button className="button" onClick={this.onLogin.bind(this)}>Login wth Github</button>
						</div>
					</div>
				</div>
			</div>
		);
	}	
}

// Allow this component to dispatch actions
// This is the default connected version
export default Redux.connect()(Login);
