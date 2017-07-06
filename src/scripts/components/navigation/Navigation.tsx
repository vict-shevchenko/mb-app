import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss'


// Sidebar navigation items
export default function Navigation() {
	return (
		<div className="navigation">
			<NavLink activeClassName="navigation__item_selected" className="navigation__item" to="/sms">Send Message</NavLink>
			<NavLink activeClassName="navigation__item_selected" className="navigation__item" to="/messages">Messages</NavLink>			
			<NavLink activeClassName="navigation__item_selected" className="navigation__item" to="/access">Access</NavLink>
		</div>
	)
}