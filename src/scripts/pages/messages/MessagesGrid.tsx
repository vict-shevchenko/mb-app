import * as React from 'react';

// Component representing a grid for messages
export default function MessagesGrid({children}) {
	return (
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
					{children}
				</tbody>
			</table>
		</div>
	)
}