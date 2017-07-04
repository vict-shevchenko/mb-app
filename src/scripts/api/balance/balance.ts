// Module for CRUD communication to /messages endpoint

import { REST_API_HOST } from '../core';
import { doFetchCall } from '../../utils/fetch';

const BALANCE_URL = `${REST_API_HOST}/balance`;

export function getBalance() {
	return doFetchCall(BALANCE_URL);
}