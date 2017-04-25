import React from 'react';
import ProgressBar from './ProgressBar';
import FundComponent from './FundComponent';

class ContentContainer extends React.Component {
	constructor(props){
		super(props);
		this.state={
			currentDonation:0,
			progressWidth:0,
			daysLeft:3,
			noOfDonors:42,
			totalFund:5000
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
    <ProgressBar currentDonation={this.state.currentDonation} progressWidth={this.state.progressWidth} totalFund={parseFloat(this.state.totalFund)}/>
<div className="details"><span className="textImp"><strong>{`
Only `}{this.state.daysLeft} {`days left `}</strong></span>
 to fund this project.
<br/><br/>
Join the <strong>{this.state.noOfDonors}</strong> other donors who have
already supported this project. Every dollar helps.<br/><br/>
</div>
<FundComponent changeProgress = {this.changeProgress} currentDonation={this.state.currentDonation} totalFund={parseFloat(this.state.totalFund)}/>
    </div>
		);
	}
}
export default ContentContainer;
