var FundComponent = require('../src/components/FundComponent');
var chai = require('chai');
var assert = chai.assert;
var DOM = require('react-addons-test-utils');

describe('FundComponent', function(){
	it('not be null', function() {
		const component = DOM.renderIntoDocument(
			<FundComponent/>
		);
		const fundCom = DOM.findRenderedDOMComponentWithClass(component, 'fundInput');

		assert.equal(fundCom.value,"");
	});

}
