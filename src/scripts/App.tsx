import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Navigation from './components/navigation/Navigation';
import SendSMS from "./pages/send-sms/SendSMS";
import Messages from "./pages/messages/Messages";
import Authorise from "./pages/auth/Authorise";


require('../styles/main.scss');

function AuthorisedRouting() {
	return (
		<div className="app__content">
			<Route path="/messages" component={Messages} />
			<Route path="/sms" component={SendSMS} />
			<Route path="/access" component={Authorise} />
		</div>
	)
}


function UnAuthorisedRouting() {
	return (
		<div className="app__content">
			<Route exact path="/access" component={Authorise} />
			<Redirect to="/access" />
		</div>
	)
}

@inject('userStore')
@observer
class App extends React.Component<any, undefined> {

	render() {
		return (
			<div className="app">
				<div className="app-container">
					<div className="app__header">Frontend Engineer Interview Assignment by Viktor Shevchenko</div>
					<div className="app__main">
						<div className="app__navigation">
							<Navigation />
						</div>
						{ this.props.userStore.ACCESS_KEY ? <AuthorisedRouting /> : <UnAuthorisedRouting /> }
					</div>
					<div className="app__empty"></div>
				</div>

				<div className="app__footer">MessageBird</div>
			</div>
		)
	}
}

export default withRouter(App);
