const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://user002:<user002>@cluster0.bd2joly.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
