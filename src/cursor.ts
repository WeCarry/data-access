import * as stream from 'stream';

export interface Cursor<T> extends stream.Readable {
	toArray(): Promise<T[]>;
}


export function fromStream<T>(stream: stream.Readable): Cursor<T> {
	(stream as any).toArray = streamToArray.bind(this, stream);

	return stream as Cursor<T>;
}
