import BoxcarNotification from 'boxcar-notification';
import Service from './service';

/**
 * Boxcar2
 *
 * @export
 * @class BoxCar2
 * @extends {Base}
 */
export default class BoxCar2 extends Service {
	/**
	 * Push
	 *
	 * @param {Object} options options
	 * @returns {Promise}
	 * @memberof BoxCar2
	 */
	push(options) {
		const bn = new BoxcarNotification(this.apiToken, options.apiToken);

		const { title, longMessage } = this;
		return bn.send({ title, longMessage, ...options });
	}
}
