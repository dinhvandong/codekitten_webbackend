const mongoose = require('mongoose');
//const logger = require('../logger/api.logger');
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = "mongodb://localhost:27017/codekitten";
var url = "mongodb://localhost:27017/codekitten";
const DATABASE_NAME = "codekitten";
var database, collection;
const connect = () => {
    //Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/codekitten';
//'mongo-dev-24b83bf9.mongo.ondigitalocean.com:27017/codekitten';
//"mongodb://doadmin:O9Y3Mn42u167y8Ka@mongo-dev-24b83bf9.mongo.ondigitalocean.com:27017/admin?authSource=admin&replicaSet=mongo-dev";

//'mongodb://127.0.0.1:27017/codekitten';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
const disconnect = () => {   
    if (!mongoose.connection) {
      return;
    }
    mongoose.disconnect();
    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });
};
module.exports = {
    connect,
    disconnect
}