import { observable, action, autorun } from 'mobx';


// Class for keeping user information
export class UserStore {
	// user API key that will be used to access REST API
	@observable ACCESS_KEY: string;

	constructor() {
		this.ACCESS_KEY = window.localStorage.getItem('ACCESS_KEY') || '';
	}

	// update key method
	@action setAccessKey(key) {
		this.ACCESS_KEY = key;
	}
}