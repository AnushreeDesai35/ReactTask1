import React from 'react';

class FundComponent extends React.Component {
	constructor(props){
		super(props);
		this.changeProgressWidth = this.changeProgressWidth.bind(this);

	}
changeProgressWidth(){

	if(parseFloat(this.refs.fundInput.value) + parseFloat(this.props.currentDonation) > this.props.totalFund || this.refs.fundInput.value === ""){
		alert("You have entered incorrect value or fund limit exceeded : "+(this.props.totalFund - parseFloat(this.props.currentDonation))+" left to donate.");
		//this.refs.validationToolTip.style.visibility = "visible";
		this.refs.validate.style.visibility = "visible";
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
	  		<input type="number" className="fundInput" ref="fundInput" required={true}/>
	  		<span className="unit">$</span>
			</div>
      <button className="fundSubmit" onClick={this.changeProgressWidth}>Give Now
			{/*<span className="validate" ref="validate">Fund limit left : {this.props.totalFund - parseFloat(this.props.currentDonation)}</span>*/}
			</button>
			<p className="reason50">Why give $50?</p>
    </div>
		);
	}
}
export default FundComponent;
