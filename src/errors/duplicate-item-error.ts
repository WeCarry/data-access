import { DataDriverError } from "./data-driver-error";

export const ERROR_MESSAGE = 'Duplicate item found.';

export class DuplicateItemError extends DataDriverError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'DuplicateItemError', stack);

		Object.setPrototypeOf(this, DuplicateItemError.prototype);
	}
}