import React from 'react';
import ProgressBar from './ProgressBar';
import FundComponent from './FundComponent';

class ContentContainer extends React.Component {
	constructor(props){
		super(props);
		this.state={
			currentDonation:0,
			progressWidth:0
		}
		this.changeProgress = this.changeProgress.bind(this);
	}

	changeProgress(fund){
		this.setState({currentDonation:parseFloat(this.state.currentDonation)+parseFloat(fund)});
		this.state.progressWidth=(this.state.progressWidth)+(fund/50);
}

	render() {
		return (
    <div className="contentContainer">
    <ProgressBar currentDonation={this.state.currentDonation} progressWidth={this.state.progressWidth}/>
<pre className="details"><span className="textImp"><strong>{`
Only 3 days left`}</strong></span>
  {` to fund this project.

Join the 42 other donors who have
already supported this project. Every dollar helps.
    `}
</pre>
<FundComponent changeProgress = {this.changeProgress} currentDonation={this.state.currentDonation}/>
    </div>
		);
	}
}
export default ContentContainer;
