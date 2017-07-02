import { observable, action, autorun } from 'mobx';
import { sendMessage, getMessages } from '../api/messages/messages'

export class MessagesStore {
	@observable messages: Array<any> = [];
	
	@action sendSMS(msg) {
		return sendMessage(msg);
	}

	@action getMessages() {
		return getMessages()
			.then(messages => this.messages = messages.items)
	}

	@action pushMessage({id, recipient, originator, body, createdDatetime}) {
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