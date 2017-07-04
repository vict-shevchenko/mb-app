import * as React from 'react';

interface iRecepient {
	recipient: number,
	status: string
}

interface iMessageRecepients {
	items: Array<iRecepient>
}

interface iMessageProps {
	id: string,
	direction: string,
	recipients: iMessageRecepients
	originator: string,
	body: string,
	createdDatetime: string
}

// Component for Message Item in Grid
export default function MessageGridItem({id, direction, recipients, originator, body, createdDatetime}: iMessageProps) {
	const dir = direction === 'mt' ? 'Outgoing' : 'Incoming';
	const recipient = recipients.items.length > 1 ? `${recipients.items[0].recipient} and ${recipients.items.length - 1} more` : recipients.items[0].recipient;
	const status = recipients.items[0].status;
	const dateTime = new Date(createdDatetime);

	return(
		<tr className="message">
			<td>{dir}</td>
			<td>{recipient}</td>
			<td>{originator}</td>
			<td>{body}</td>
			<td>{status}</td>
			<td>{dateTime.getHours()}:{dateTime.getMinutes()}</td>
		</tr>
	)
}