import * as React from 'react';

// Component that is used to render SendSMS form input like Recepient
export function MBTextInput({ input, meta, type, placeholder, required}) {

	const hasError = meta.touched && meta.dirty && !meta.valid;

	return (
		<div className="mb-form__element">
			<input {...input} type={type} placeholder={placeholder} className={`mb-form__text-input ${hasError ? 'mb-form__text-input_error' : ''}`}/>
			{required ? <span className="mb-form__asterisk-required">*</span> : ''}
			{hasError ? <div className="mb-form__element-error">{meta.errors[0]}</div> : ''}
		</div>
	);
}