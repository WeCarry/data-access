import { MongoClient } from 'mongodb';

export async function connectToMongoDB(url: string, dbName: string) {
	try {
		const client = new MongoClient(url);
		await client.connect();
		return client.db(dbName);
	} catch (error) {
		console.error(error);
	}
}
