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
		return (
			<div>
				<h1>Update Your Authentification information</h1>
				<div className="panel-container">
					<h2>Your current API key - {this.props.userStore.ACCESS_KEY}</h2>
					<div className="row">
						<div className="col-md-8">
							<input type="text" ref={(input) => { this.apiKeyInput = input; }}/>
						</div>
						<div className="col-md-4">
							<button onClick={this.updateKey}>Update</button>
						</div>
					</div>
				</div>
				 
			</div>
		)
	}
}

export default inject('userStore')(observer(Authorise));