import { DataDriverError } from "./data-driver-error";

export const ERROR_MESSAGE = 'Field is immutable.';

export class ImmutableFieldError extends DataDriverError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'ImmutableFieldError');

		Object.setPrototypeOf(this, ImmutableFieldError.prototype);
	}
}