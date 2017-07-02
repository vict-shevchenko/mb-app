import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { autorun } from 'mobx';
import { Provider } from 'mobx-react';

import { FormStore } from 'reactive-mobx-form';
import App from './scripts/App';
import { UserStore } from "./scripts/store/UserStore";


const formStore = new FormStore();
const userStore = new UserStore();

autorun(() => {
	window.localStorage.setItem('ACCESS_KEY', userStore.ACCESS_KEY);
})

ReactDOM.render(
	<Provider userStore={userStore} formStore={formStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);