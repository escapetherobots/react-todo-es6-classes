var React = require('react');
var Nav = require('Nav');

export class Main extends React.Component {
	render(){
		return (
			<div>
				<Nav />
				{this.props.children}
					
			</div>
		);

	}
}

export default Main;