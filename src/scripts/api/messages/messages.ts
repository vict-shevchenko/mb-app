import { REST_API_HOST } from '../core';
import { doFetchCall } from '../../utils/fetch';

const MESSAGES_URL = `${REST_API_HOST}/messages`;

export function sendMessage(msg) {
	return doFetchCall(MESSAGES_URL, {
		method: 'POST',
		body: JSON.stringify(msg)
	})
}

export function getMessages() {
	return doFetchCall(MESSAGES_URL);
}