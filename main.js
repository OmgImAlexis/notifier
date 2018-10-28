import { ArgumentError } from 'standard-errors';
import * as services from './services';

/**
 * Notifer
 *
 * @export
 * @class Notifer
 */
export default class Notifer {
	/**
	 * Creates a Notifer instance
	 * @param {String} service Service name
	 * @param {Object} options Any values to bind to `this`
	 * @memberof Notifer
	 */
	constructor(service, options) {
		if (!service || !Object.keys(services).includes(service.toString().toLowerCase())) {
			throw new ArgumentError(`Unknown service "${service}", [${Object.keys(services).join(', ')}]`);
		}

		Object.defineProperty(this, 'service', {
			configurable: false,
			enumerable: false,
			value: new services[service](options),
			writable: false
		});
	}

	push(options) {
		return this.service.push(options);
	}
}
