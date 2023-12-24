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
