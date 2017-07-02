import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react';

import { FormStore } from 'reactive-mobx-form';
import App from './scripts/App';


const formStore = new FormStore();

ReactDOM.render(
	<Provider formStore={formStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);