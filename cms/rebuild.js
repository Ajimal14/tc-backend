require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/cms`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database configured!",url);
  db.close();
});