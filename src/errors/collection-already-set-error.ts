import { DataDriverError } from "./data-driver-error";

export const ERROR_MESSAGE = 'Collection already set.';

export class CollectionAlreadySetError extends DataDriverError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'CollectionAlreadySetError', stack);

		Object.setPrototypeOf(this, CollectionAlreadySetError.prototype);
	}
}