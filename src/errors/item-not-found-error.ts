import { DataAccessError } from "./data-access-error";

export class ItemNotFoundError extends DataAccessError {
	constructor(message?: string, name = 'ItemNotFoundError', stack?: string) {
		super(message, name, stack);

		Object.setPrototypeOf(this, ItemNotFoundError.prototype);
	}
}