import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Navigation from './components/navigation/Navigation';
import SendSMS from "./pages/send-sms/SendSMS"; // Sms sending form
import Messages from "./pages/messages/Messages"; // Component that displays user messages
import Authorise from "./pages/auth/Authorise"; // Component to update your API ACCESS_KEY

require('../styles/main.scss');

// Routing for users who have provided an API key.
function AuthorisedRouting() {
	return (
		<div className="app__content">
			<Route path="/messages" component={Messages} />
			<Route path="/sms" component={SendSMS} />
			<Route path="/access" component={Authorise} />
		</div>
	)
}

// For users that did not provide a access key to MessageBird API only /acceess url should be available
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

// usage of wihtRouter is a requireent for proper updates of components with custom method 'shouldComponentUpdate'.
// Liked it happend after with decorated App component
export default withRouter(App);
