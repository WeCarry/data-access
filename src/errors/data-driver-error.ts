import { BaseError } from "@praoshealth/core/errors/base-error";
import { DataAccessError } from "./data-access-error";

export class DataDriverError extends DataAccessError {
	constructor(message?: string, name = 'DataDriverError', stack?: string) {
		super(message, name, stack);

		Object.setPrototypeOf(this, DataDriverError.prototype);
	}
}