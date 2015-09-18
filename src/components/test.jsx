import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// Deep rendering functions //
export function renderStateless(props, Type, child = false) {
	return TestUtils.renderIntoDocument(
		<div>
			{child ? <Type {...props}>{child}</Type> : <Type {...props} /> }
		</div>
	).children[0];
}

export function renderDeep(props, Type) {
	return TestUtils.renderIntoDocument(
		<Type {...props} />
	);
}

export function getNode(element) {
	return ReactDOM.findDOMNode(element);
}


// Shallow rendering functions //
let getRenderer = (function() {
	const shallow = TestUtils.createRenderer();

	return function() {
		return shallow;
	}
})();

export function render(props, Type, child = false) {
	let output = child ? <Type {...props}>{child}</Type> : <Type {...props} />;

	getRenderer().render(
		output
	);	
}

export function className() {
	return getRenderer().getRenderOutput().props.className;
}

export function type() {
	return getRenderer().getRenderOutput().type;
}

export function getOutput() {
	return getRenderer().getRenderOutput();
}

export class TestProps extends React.Component {
	render() {
		return (
			<div {...this.props} />
		);
	}
}