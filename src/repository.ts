import { MongoClient } from 'mongodb';
import { DataDriver } from './data-driver';
import { Identifiable } from './identifiable';
import { RepositoryField } from './repository-field';

export type RepositoryOptions = {
	identifier: string;
	driver: DataDriver<any>;
	fields?: RepositoryField[];
	collection?: string;
};
export class Repository<T extends Identifiable = Identifiable> {
	private readonly _client: MongoClient;
	private readonly _dbName: string;
	constructor(client: MongoClient, dbName: string) {
		this._client = client;
		this._dbName = dbName;
	}

	
}
