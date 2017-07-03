import * as React from 'react';
import { reactiveMobxForm, Control } from 'reactive-mobx-form'; 
import MBTextInput from "../../components/form/MBTextInput";

// Component that renders a Send SMS form
function SendSMSForm({submit}) {
	return (
		<form onSubmit={submit}>
			<div className="row">
				<div className="col-md-6">
					<Control name="recepient" type="text" component={MBTextInput} placeholder="Recepient" required={true}/>
				</div>
				<div className="col-md-6">
					<Control name="originator" type="text" component={MBTextInput} placeholder="Originator" required={true}/>
				</div>

			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="mb-form__element">
						<Control name="body" component="textarea" placeholder="Message" className="mb-form__textarea" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 push-md-8">
					<button className="btn btn_primary btn_medium full-width">Send SMS</button>
				</div>
			</div>
		</form>
	)
}

// wrapping component into a reactiveMobxForm, so it can interact with formStore
export default reactiveMobxForm('sms', {
	recepient: ['', 'required|numeric'],
	originator: ['', 'required|numeric']
})(SendSMSForm);