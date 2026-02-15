const { MongoClient,ObjectId } = require('mongodb');

let dbConnectionurl='mongodb://127.0.0.1:27017'
const client = new MongoClient(dbConnectionurl);
let dbConnection=async()=>{
    await client.connect();
    let db=client.db("mongodb_project");
    return db;
}

module.exports={dbConnection,ObjectId}