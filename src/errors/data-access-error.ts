import { BaseError } from "@praoshealth/core/errors/base-error";

export class DataAccessError extends BaseError {
	constructor(message?: string, name = 'DataAccessError', stack?: string) {
		super(message, name, stack);

		Object.setPrototypeOf(this, DataAccessError.prototype);
	}
}