const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://mongo:27017/cms";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});