import * as React from 'react';
import './button.scss'

// Component that is used to render button

// NOTE: Button componenet is extremly simplified. It is not itended to be used in production. Only for demo puposes.
// When turning it into production ready, it should be extended with props like "primary" etc, to construct proper className
// props should be validated not to contain attributes that are not applicable for button tag

export default function Button(props) {
	const buttonPtops = Object.assign({}, props);
	delete buttonPtops.children;

	buttonPtops.className = `btn btn_primary btn_medium full-width ${buttonPtops.className}`;

	return (
		<button {...buttonPtops} >{props.children}</button>
	);
}