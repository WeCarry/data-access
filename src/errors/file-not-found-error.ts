import { DataDriverError } from "./data-driver-error";

export const ERROR_MESSAGE = 'File not found.';

export class FileNotFoundError extends DataDriverError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'FileNotFoundError', stack);

		Object.setPrototypeOf(this, FileNotFoundError.prototype);
	}
}