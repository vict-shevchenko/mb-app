import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from "react-router-dom";
import { MessagesStore } from "../../store/MessagesStore";

interface iProps extends RouteComponentProps<any> {
	messagesStore: MessagesStore,
}

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

function Message({id, direction, recipients, originator, body, createdDatetime}: iMessageProps) {
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

class Messages extends React.Component<iProps, any> {
	componentDidMount() {
		this.props.messagesStore.getMessages();
	}

	render() {
		return (
			<div>
			<h1>Messages</h1>

			<div className="panel-container">
				<table className="messages-grid" cellPadding="0" cellSpacing="0">
					<thead>
						<tr>
							<th>Type</th>
							<th>Recipient</th>
							<th>Originator</th>
							<th>Message</th>
							<th>Status</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{this.props.messagesStore.messages.map(message => <Message key={message.id} {...message} />)}
					</tbody>
				</table>
				
			</div>
		</div>
		)
	}
}


export default inject('messagesStore')(observer(Messages));