import { DataDriverError } from "./data-driver-error";

export const ERROR_MESSAGE = 'Schema validation failed.';

export class SchemaValidationError extends DataDriverError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'SchemaValidationError', stack);

		Object.setPrototypeOf(this, SchemaValidationError.prototype);
	}
}