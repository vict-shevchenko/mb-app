import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<div>
			<Link className="nav-item" to="/sms">Send Message</Link>
			<Link className="nav-item" to="/messages">Messages</Link>
		</div>
	)
}