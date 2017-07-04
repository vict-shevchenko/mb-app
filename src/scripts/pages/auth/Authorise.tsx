import * as React from 'react';
import { inject, observer } from "mobx-react";
import { UserStore } from "../../store/UserStore";
import { RouteComponentProps } from "react-router-dom";

interface iProps extends RouteComponentProps<any> {
	userStore: UserStore
}

// Component that has a input field for ACCESS_KEY, and button to update it.
// I have used a ref attribut on input here, as we don§t need to keep its data in component state and are intrested only in final value
class Authorise extends React.Component<iProps, {}> {
	apiKeyInput: HTMLInputElement;

	constructor() {
		super();

		this.updateKey = this.updateKey.bind(this);
	}

	// update key in store (it will auomatically update in localStorege due to autorun function)
	updateKey() {
		this.props.userStore.setAccessKey(this.apiKeyInput.value);
	}

	render() {
		const key = this.props.userStore.ACCESS_KEY;
		const keyValid = this.props.userStore.accessKeyValid;
		const keyErrorMsg = this.props.userStore.accessKeyInvalidMessage;
		const balance = this.props.userStore.balance;

		return (
			<div>
				<h1>Update Your Authentification information</h1>
				<div className="panel-container">
					<p>Before you can start interact with a platform please set your <code>ACCESS_KEY</code> below</p>
					<h2>Your current API key - {key}</h2>
					{!key ? <p className="error">Missing Access Key</p> : ''}
					{key && !keyValid ? <p className="error">Access Key is invalid, {keyErrorMsg}</p> : ''}
					{key && keyValid ? <p className="success">Access Key valid, your balance ${balance}</p> : ''}
					<div className="row">
						<div className="col-md-8">
							<input type="text" ref={(input) => { this.apiKeyInput = input; }} className="mb-form__text-input" placeholder="Your API Access Key"/>
						</div>
						<div className="col-md-4">
							<button className="btn btn_primary btn_medium full-width" onClick={this.updateKey}>{ key ? 'Update' : 'Set'}</button>
						</div>
					</div>
				</div>
				 
			</div>
		)
	}
}

export default inject('userStore')(observer(Authorise));