export function validateEmail(email: string): boolean {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

export function debounce<T extends unknown[]>(
	fn: (...args: T) => void,
	wait = 100
): (...args: T) => void {
	let timeout: ReturnType<typeof setTimeout>;
	return (...args: T) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, wait);
	};
}
