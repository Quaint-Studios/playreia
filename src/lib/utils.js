/**
 * @param {object} obj
 * @param {PropertyKey} prop
 */
export function hasOwn(obj, prop) {
	let support = 'unsupported';

	if (Object['hasOwn'] != undefined) {
		support = 'hasOwn';
	} else if (Object['hasOwnProperty'] != undefined) {
		support = 'hasOwnProperty';
	}

	switch (support) {
		case 'hasOwn':
			return Object.hasOwn(obj, prop);

		case 'hasOwnProperty':
			return Object.prototype.hasOwnProperty.call(obj, prop);

		case 'unsupported':
		default:
			return false;
	}
}

/**
 * @param {number} date_future
 * @param {number} date_now
 */
export function getDHMS(date_future, date_now, readable = false) {
	// get total seconds between the times
	var delta = Math.abs(date_future - date_now) / 1000;

	// calculate (and subtract) whole days
	var days = Math.floor(delta / 86400);
	delta -= days * 86400;

	// calculate (and subtract) whole hours
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;

	// calculate (and subtract) whole minutes
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;

	// what's left is seconds
	var seconds = delta % 60; // in theory the modulus is not required

	if (readable) {
		const num2time = (/** @type {number} */ num, /** @type {string} */ time) => {
			return `${Math.ceil(num)} ${time}${Math.ceil(num) != 1 ? 's' : ''}`;
		};

		return {
			days: num2time(days, 'day'),
			hours: num2time(hours, 'hour'),
			minutes: num2time(minutes, 'minute'),
			seconds: num2time(seconds, 'second')
		};
	}

	return { days, hours, minutes, seconds };
}
