import * as React from 'react';
import SendSMSForm from './SendSMSForm';

export default function SendSMS() {
	function handleSubmit(form) {
		const params = {
			originator: form.originator,
			body: form.body,
			recipients: [form.recepient]
		}
		debugger;
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