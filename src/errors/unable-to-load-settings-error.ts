import { ItemNotFoundError } from "./item-not-found-error";

export const ERROR_MESSAGE = 'Unable to load settings.';

export class UnableToLoadSettingsError extends ItemNotFoundError {
	constructor(message = ERROR_MESSAGE, stack?: string) {
		super(message, 'UnableToLoadSettingsError', stack);

		Object.setPrototypeOf(this, UnableToLoadSettingsError.prototype);
	}
}