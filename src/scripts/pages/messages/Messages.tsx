import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from "react-router-dom";
import { MessagesStore } from "../../store/MessagesStore";
import MessagesGrid from './MessagesGrid';
import MessageGridItem from './MessageGridItem';

import './messages.scss';

interface iProps extends RouteComponentProps<any> {
	messagesStore: MessagesStore,
}

// Component responsible for requestin/rendering a grid of user messages
class MessagesPage extends React.Component<iProps, any> {
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
				<MessagesGrid>
					{this.props.messagesStore.messages.map(message => <MessageGridItem key={message.id} {...message} />)}
				</MessagesGrid>
		</div>
		);
	}
}

export default inject('messagesStore')(observer(MessagesPage));