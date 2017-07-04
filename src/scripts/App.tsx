import * as React from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Navigation from './components/navigation/Navigation';
import SendSMSPage from "./pages/send-sms/SendSMS"; // Sms sending form
import MessagesPage from "./pages/messages/Messages"; // Component that displays user messages
import AuthorisePage from "./pages/auth/Authorise"; // Component to update your API ACCESS_KEY
import { UserStore } from "./store/UserStore";

require('../styles/main.scss');

// Routing for users who have provided an API key.
function AuthorisedRouting() {
	return (
		<div className="app__content">
			<Route path="/messages" component={MessagesPage} />
			<Route path="/sms" component={SendSMSPage} />
			<Route path="/access" component={AuthorisePage} />
			<Redirect from="/" to="/messages" />
		</div>
	)
}

// For users that did not provide a access key to MessageBird API only /acceess url should be available
function UnAuthorisedRouting() {
	return (
		<div className="app__content">
			<Route exact path="/access" component={AuthorisePage} />
			<Redirect from="*" to="/access" />
		</div>
	)
}


@inject('userStore')
@observer
class App extends React.Component<any, undefined> {

	render() {
		const { userStore }:{userStore: UserStore} = this.props;

		return (
			<div className="app">
				<div className="app-container">
					<div className="app__header">Frontend Engineer Interview Assignment by Viktor Shevchenko</div>
					<div className="app__main">
						<div className="app__navigation">
							<Navigation />
						</div>
						{ userStore.ACCESS_KEY && userStore.accessKeyValid ? <AuthorisedRouting /> : <UnAuthorisedRouting /> }
					</div>
					<div className="app__empty"></div>
				</div>

				<div className="app__footer">MessageBird</div>
			</div>
		)
	}
}

// usage of wihtRouter is a requirement for proper updates of components with custom method 'shouldComponentUpdate'.
// Liked it happend after we decorated App component with oberver
export default withRouter(App);
