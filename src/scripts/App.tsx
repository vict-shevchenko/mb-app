import * as React from 'react';
import { Route } from 'react-router-dom';

require('../styles/main.scss');

export default class App extends React.Component<any, undefined> {

	render() {
		return (
			<div className="site">
				<div className="site__header">header</div>
				<div className="site__navigation">
					nav
				</div>
				<div className="site__content">
					content
				</div>
				<div className="site__footer">footer</div>
			</div>
		)
	}
}

