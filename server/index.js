const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/goods';

// Database Name
const dbName = 'shop';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  var collection = db.collection('test_insert');
  collection.insert({a:3},function(err,docs){

  	console.log('insert complet');
  });
  const db = client.db(dbName);

  client.close();
});