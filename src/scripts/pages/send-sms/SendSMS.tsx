import * as React from 'react';
import { inject, observer } from 'mobx-react';
import SendSMSForm from './SendSMSForm';
import { MessagesStore } from "../../store/MessagesStore";
import { RouteComponentProps } from "react-router-dom";

interface iProps extends RouteComponentProps<any> {
	messagesStore: MessagesStore,
}

// Component for Send SMS page, havig a callback function, when form is submitted
function SendSMSPage(props: iProps) {
	function handleSubmit(form) {
		const message = {
			originator: form.originator,
			body: form.body,
			recipients: [form.recepient]
		}
		
		return props.messagesStore.sendSMS(message);
	}

	return (
		<div>
			<h1>Quickly send SMS</h1>

			<div className="panel-container">
				<SendSMSForm onSubmit={handleSubmit}/>
			</div>
		</div>
	)
}

export default inject('messagesStore')(observer(SendSMSPage))