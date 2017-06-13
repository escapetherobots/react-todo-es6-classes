var React = require('react');

export class Extra extends React.Component {
	
	render(){
		return (
			<div>
				<h1 className='page-title'>LEARNING FLEX</h1>
				<div className="row">
					<p>• All immediate child elements are flex container are flex items</p>
					<p>• display: flex => makes the container a block level element</p>
					<p>• display: inline-flex => takes up only space needed to display node content</p>

				</div>

				<div className="z-flex-container">
					<div className="z-flex-item z-flex-1"></div>
					<div className="z-flex-item z-flex-2"></div>
					<div className="z-flex-item z-flex-3"></div>
				</div>

				<div className="z-flex-container2">
					<div className="z-flex-item z-flex-1"></div>
					<div className="z-flex-item z-flex-2"></div>
					<div className="z-flex-item z-flex-3"></div>
				</div>

				<div className="z-flex-container3">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					<div className="z-flex-item z-flex-5">5</div>
					<div className="z-flex-item z-flex-6">6</div>
					<div className="z-flex-item z-flex-7">7</div>
					<div className="z-flex-item z-flex-8">8</div>
					<div className="z-flex-item z-flex-9">9</div>
				</div>

				<div className="z-flex-container4">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					<div className="z-flex-item z-flex-5">5</div>
					<div className="z-flex-item z-flex-6">6</div>
					<div className="z-flex-item z-flex-7">7</div>
					<div className="z-flex-item z-flex-8">8</div>
				</div>

				<div className="z-flex-container5">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					<div className="z-flex-item z-flex-5">5</div>
					<div className="z-flex-item z-flex-6">6</div>
					<div className="z-flex-item z-flex-7">7</div>
					<div className="z-flex-item z-flex-8">8</div>
				</div>

				<h1 className='page-title'>Flex Containers: JUSTIFY CONTENT</h1>
				<div className="row">
					<p>• flex-start(default)</p>
					<p>• flex-end</p>
					<p>• center</p>
					<p>• space-between</p>
					<p>• space-around</p>

				</div>

				<div className="z-flex-container6 container">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					
				</div>

				<div className="z-flex-container7 container">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					
				</div>

				<div className="z-flex-container8 container">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					
				</div>

				<div className="z-flex-container9 container">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					
				</div>


				<div className="z-flex-container10 container">
					<div className="z-flex-item z-flex-1">1</div>
					<div className="z-flex-item z-flex-2">2</div>
					<div className="z-flex-item z-flex-3">3</div>
					<div className="z-flex-item z-flex-4">4</div>
					
				</div>

				<div className="z-flex-container11 container">
					<div className="zz-flex-item zz-flex-item-1">1</div>
					<div className="zz-flex-item zz-flex-item-2">2</div>
					<div className="zz-flex-item zz-flex-item-3">3</div>
					
					
				</div>


			</div>
		);
	}
}

export default Extra;

