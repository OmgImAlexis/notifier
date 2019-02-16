import { NotImplementedError } from 'standard-errors';

/**
 * Service
 *
 * @export
 * @class Service
 */
export default class Service {
	constructor(options = {}) {
		Object.keys(options).forEach(property => {
			Object.defineProperty(this, property, {
				configurable: true,
				enumerable: true,
				value: options[property],
				writable: true
			});
		});
	}

	/**
	 * Push
	 *
	 * @returns {NotImplementedError}
	 * @memberof Service
	 */
	push() {
		return new NotImplementedError();
	}
}
