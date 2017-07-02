import { observable, action, autorun } from 'mobx';

export class UserStore {
	@observable ACCESS_KEY: string;

	constructor() {
		this.ACCESS_KEY = window.localStorage.getItem('ACCESS_KEY') || '';
	}

	@action setAccessKey(key) {
		this.ACCESS_KEY = key;
	}
}