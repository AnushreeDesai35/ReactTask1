import React from 'react';

class FundComponent extends React.Component {
	constructor(props){
		super(props);
		this.changeProgressWidth = this.changeProgressWidth.bind(this);

	}
changeProgressWidth(){

	if(parseFloat(this.refs.fundInput.value) + parseFloat(this.props.currentDonation) > this.props.totalFund){
		alert("Fund limit left : "+(this.props.totalFund - parseFloat(this.props.currentDonation)));
	}
	else {
		this.props.changeProgress(parseFloat(this.refs.fundInput.value));
		this.refs.fundInput.value = "";
	}

}
	render() {
		return (
    <div className="fundComponent">
			<div className="input-box">
	  		<input type="number" className="fundInput" ref="fundInput"/>
	  		<span className="unit">$</span>
			</div>
      <button className="fundSubmit" onClick={this.changeProgressWidth}>Give Now</button>
			<p className="reason50">Why give $50?</p>
    </div>
		);
	}
}
export default FundComponent;
