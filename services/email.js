import pify from 'pify';
import email from 'emailjs';
import { ArgumentError } from 'standard-errors';
import Service from './service';

export default class Email extends Service {
	constructor(options) {
		if (!Object.keys(options).includes('to')) {
			throw new ArgumentError('Missing "to"');
		}
		super(options);
	}

	push(options) {
		// Connect to email server
		const { user, password, host, ssl } = this;
		const server = email.server.connect({ user, password, host, ssl, ...options });

		// Send email
		const { text, from, to, cc, subject } = this;
		return pify(server.send({ text, from, to, cc, subject, ...options }));
	}
}
