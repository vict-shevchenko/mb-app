import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { autorun } from 'mobx';
import { Provider } from 'mobx-react';

// reactive-mobx-form is a form managment library authored by me. It will be used for SMS send form
// keeping a formStore globally avaliable is a requirement
import { FormStore } from 'reactive-mobx-form';
import App from './scripts/App';
import { UserStore } from "./scripts/store/UserStore";
import { MessagesStore } from "./scripts/store/MessagesStore";

// creating a stores that should exist in application, if too many of them, this logic can be moved to separate module
const formStore = new FormStore();
const userStore = new UserStore();
const messagesStore = new MessagesStore();

// whenever user changes his 'userStore.ACCESS_KEY' it will be updated in localSorage, so it can be stored on a client
autorun(() => {
	window.localStorage.setItem('ACCESS_KEY', userStore.ACCESS_KEY);
})

ReactDOM.render(
	<Provider userStore={userStore} messagesStore={messagesStore} formStore={formStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);