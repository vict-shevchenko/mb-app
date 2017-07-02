import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<div className="navigation">
			<Link className="navigation__item" to="/sms">Send Message</Link>
			<Link className="navigation__item" to="/messages">Messages</Link>			
			<Link className="navigation__item" to="/access">Access</Link>
		</div>
	)
}