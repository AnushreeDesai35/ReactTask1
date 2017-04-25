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
			</div>
		);
	}
}
export default App;
