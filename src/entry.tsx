import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; // used a hashRouting to better serf experience on gh-pages.
import { autorun } from 'mobx';
import { Provider } from 'mobx-react';

// reactive-mobx-form is a form managment library authored by me. It will be used for SMS send form
// keeping a formStore globally avaliable is a requirement
import { FormStore } from 'reactive-mobx-form';
import App from './scripts/App';
import { UserStore } from "./scripts/store/UserStore";
import { MessagesStore } from "./scripts/store/MessagesStore";

import './styles/main.scss';

// creating a stores that should exist in application, if too many of them, this logic can be moved to separate module
const appStore = {
	formStore: new FormStore(),
	userStore: new UserStore(),
	messagesStore: new MessagesStore(),
}


// whenever user changes his 'userStore.ACCESS_KEY' it will be updated in localSorage, so it can be stored on a client
autorun(() => {
	window.localStorage.setItem('ACCESS_KEY', appStore.userStore.ACCESS_KEY);

	appStore.userStore.ACCESS_KEY && appStore.userStore.checkKey();
})

ReactDOM.render(
	<Provider {...appStore}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);