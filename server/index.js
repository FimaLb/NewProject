import { MongoClient } from 'mongodb';
import { equal } from 'assert';

// Connection URL
const url = 'mongodb://localhost:27017/goods';

// Database Name
const dbName = 'shop';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
	equal(null, err);
	
	console.log('Client: ' + client);
	console.log("Connected successfully to server");

	const db = client.db(dbName);
	var collection = db.collection('test_insert');
	
	collection.insert({ a: 3 }, function (err, docs) {
		equal(null, err);
		console.log('insert complet');
		console.log("Docs:" + docs);
	});

	client.close();
});