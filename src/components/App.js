import React from 'react';
import ContentContainer from './ContentContainer';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="mainContainer">
				<ContentContainer/>
				<div className="actionsContainer">
					<button className="save actioButton">Save for later</button>
					<button className="share actioButton">Tell your friends</button>
				</div>
			</div>
		);
	}
}
export default App;
