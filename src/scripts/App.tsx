import * as React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import SendSMS from "./pages/send-sms/SendSMS";
import Messages from "./pages/messages/Messages";

require('../styles/main.scss');

export default class App extends React.Component<any, undefined> {

	render() {
		return (
			<div className="app">
				<div className="app-container">
					<div className="app__header">header</div>
						<div className="app__main">
							<div className="app__navigation">
								<Navigation />
							</div>
							<div className="app__content">
								<Route path="/messages" component={Messages}/>
								<Route path="/sms" component={SendSMS}/>
							</div>
						</div>
					<div className="app__empty"></div>
				</div>

				<div className="app__footer">footer</div>
			</div>
		)
	}
}

