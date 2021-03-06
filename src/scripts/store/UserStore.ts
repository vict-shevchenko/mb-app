import { observable, action, autorun } from 'mobx';
import { getBalance } from "../api/balance/balance";

// Class for keeping user information
export class UserStore {
	// user API key that will be used to access REST API
	@observable ACCESS_KEY: string;
	@observable accessKeyValid: boolean = false;
	@observable accessKeyInvalidMessage: string = '';
	@observable balance: string = '';

	constructor() {
		this.ACCESS_KEY = window.localStorage.getItem('ACCESS_KEY') || '';
	}

	// update key method
	@action setAccessKey(key) {
		this.ACCESS_KEY = key;
	}

	// Method to be used to check balance, also verify a API key
	checkKey() {
		getBalance()
			.then(result => {
				this.accessKeyValid = true;
				this.accessKeyInvalidMessage = '';
				this.balance = `${result.amount} ${result.type}`
			})
			.catch(error => {
				this.accessKeyValid = false;
				this.accessKeyInvalidMessage = error.message;
			})
	}
}