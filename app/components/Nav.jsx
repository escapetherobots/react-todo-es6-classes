var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({


	render: function(){
		return (
			<div  >
				<nav className="top-bar nav-background" data-responsive-toggle="example-menu" data-hide-for="medium">
					<div className="top-bar-left">
						<ul className="menu" data-hide-for="medium">
							<li className="menu-text">CRUX TODO</li>
							<li><IndexLink to="/" activeClassName="active">Login</IndexLink></li>
							<li><Link to="/extra" activeClassName="active">Extra</Link></li>
							<li><Link to="/todos" activeClassName="active">Todo App</Link></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<ul className="menu" data-hide-for="medium"><li><a href="#">Logout</a></li></ul>
					</div>
				</nav>
			</div>
		);
	}

});

module.exports = Nav;