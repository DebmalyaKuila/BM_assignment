const {MongoClient}  =require("mongodb")

const client = new MongoClient("mongodb://127.0.0.1:27017")

async function connectDB() {
    try {
        await client.connect()
        console.log("connected to database");
    } catch (error) {
        console.error(error)
    }
}

//a function to insert data in mongodb
const db=client.db("X-BOT")
const collection= db.collection("trendings")

async function insertData(data) {
    try {
        const result= await collection.insertOne(data);
        return result;
    } catch (err) {
        console.error(err)
    }
}

//call it to connect to DB
connectDB()


module.exports=insertData