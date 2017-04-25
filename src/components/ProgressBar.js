import React from 'react';

class ProgressBar extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		let style = {
			width: this.props.progressWidth + '%'
		}
		return (
    <div>
      <div className="progressBar">
      <div className="tooltiptext">${5000 - this.props.currentDonation} still needed for this project</div>
        <div className="progress" style={style}></div>
      </div>
    </div>
		);
	}
}

export default ProgressBar;
