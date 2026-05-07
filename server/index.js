const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://server3:LuCrxC8B7cb2BQVs@cluster0.ywso1qs.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db("simpleClud3");
        const userCollection = db.collection("users");

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Umayer Ahmad')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
