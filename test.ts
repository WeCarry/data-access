import {connectToMongoDB} from './src/database/connection'

async function main() {
const url =
	'mongodb://root:password@localhost:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true';
	const dbConnection = await connectToMongoDB(url);
	console.log(await dbConnection?.db('main-dev').collection('users').find({}).toArray());

}
main().then()
