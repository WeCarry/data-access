import { Identifiable } from './identifiable';
import { DataWatcher } from './data-watcher';
import { Cursor } from './cursor';
import { BulkWriteOperation, BulkWriteResult } from './bulk-write-operation';

export interface DataDriver<T extends Identifiable = Identifiable> {
	collection: string;

	insert(item: T): Promise<T>;

	updateOne(where: any, update: any, select?: any, upsert?: boolean): Promise<T>;

	updateMany(where: any, update: any): Promise<number>;

	replaceOne(where: any, doc: T, upsert?: boolean): Promise<T>;

	deleteOne(where: any): Promise<boolean>;

	deleteMany(where: any): Promise<number>;

	bulkWrite(operations: BulkWriteOperation<T>[]): Promise<BulkWriteResult>;

	findById(id: string, select?: any): Promise<T>;

	findOne(where?: any, select?: any, sort?: any): Promise<T>;

	newId(): any;

	int32(value: number): any;

	double(value: number): any;

	long(value: number | string): any;

	toId(id: any | any[]): any | any[];

	isId(id: any): boolean;

	find(
		conditions?: any,
		projection?: any,
		sort?: any,
		skip?: number,
		limit?: number,
		collation?: any
	): Cursor<T>;

	aggregate<T1 = T>(pipeline: any[], sort?: any, skip?: number, limit?: number): Cursor<T1>;

	watch(resumeToken?: any): DataWatcher<T>;

	getResumeToken(): Promise<any>;

	compareTokens(a: any, b: any): boolean;

	count(conditions?: any): Promise<number>;
}
