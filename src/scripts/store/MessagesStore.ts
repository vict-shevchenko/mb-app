import { observable, action, autorun } from 'mobx';
import { sendMessage, getMessages } from '../api/messages/messages'

// Class for management of user messages
export class MessagesStore {
	// initial use messages
	@observable messages: Array<any> = [];
	
	// call API method to send new message
	@action sendSMS(msg) {
		return sendMessage(msg);
	}

	// Call API method to get all user messages
	@action getMessages() {
		return getMessages()
			.then(messages => this.messages = messages.items)
	}

	// method that is used as a callback after message was pushed to client by web sockets
	@action pushMessage({id, recipient, originator, body, createdDatetime}) {

		// we need to align message format
		this.messages.push({
			id,
			recipients: {
				items:[
					{
						recipient,
						status: 'delivered'
					}
				]
			},
			originator,
			body,
			createdDatetime
		})
	}
}