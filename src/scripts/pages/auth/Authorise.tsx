import * as React from 'react';
import { inject, observer } from "mobx-react";
import { UserStore } from "../../store/UserStore";

interface iAuthoriseProps {
	userStore: UserStore,
	match: any,
	location: any,
	history: any
}

class Authorise extends React.Component<iAuthoriseProps, {}> {
	apiKeyInput: HTMLInputElement;

	constructor() {
		super();

		this.updateKey = this.updateKey.bind(this);
	}

	updateKey() {
		this.props.userStore.setAccessKey(this.apiKeyInput.value);
	}

	render() {
		const key = this.props.userStore.ACCESS_KEY;

		return (
			<div>
				<h1>Update Your Authentification information</h1>
				<div className="panel-container">
					<p>Before you can start interact with a platform please set your <code>ACCESS_KEY</code> below</p>
					<h2>Your current API key - {key}</h2>
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