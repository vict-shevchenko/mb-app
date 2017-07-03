import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from "react-router-dom";
import { MessagesStore } from "../../store/MessagesStore";

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

interface iProps extends RouteComponentProps<any> {
	messagesStore: MessagesStore,
}

// Component responsible for requestin/rendering a grid of user messages
class Messages extends React.Component<iProps, any> {
	ws: WebSocket;

	// when component is mounted
	componentDidMount() {
		// request user messages
		this.props.messagesStore.getMessages();

		// initiate web socket connection
		// this.ws = new WebSocket("ws://localhost:5000");
		 this.ws = new WebSocket("wss://blooming-woodland-27725.herokuapp.com/");

		// logic for managing messages from web sockets
		this.ws.onmessage = (event) => {
			const message = JSON.parse(event.data);

			if (message.type === 'MESSAGE_RECEIVED') {
				console.log('New messsage received');
				this.props.messagesStore.pushMessage(message.content);
			} else {
				console.log('Data received from WS stream ', event.data);
			}
		}
	}

	// close ws connection when component is unmounted
	componentWillUnmount() {
		this.ws.close();
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