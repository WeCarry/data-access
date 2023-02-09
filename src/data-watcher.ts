import { EventEmitter } from 'events';

export class DataWatcher<T> extends EventEmitter {
	constructor(public close: () => Promise<void>) {
		super();
	}

	insert(token: any, item: T) {
		this.emit('added', token, item);
	}

	update(token: any, item: T, update: any) {
		this.emit('updated', token, item, update);
	}

	delete(token: any, id: any) {
		this.emit('deleted', token, id);
	}

	error(err: any) {
		this.emit('error', err);
	}

	end() {
		this.emit('ended');
	}
}
