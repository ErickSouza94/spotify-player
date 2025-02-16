import { MongoClient } from "mongodb"

const URI = "mongodb+srv://ErickSSouza94:spotifyDb@cluster0.b0fri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyDb")
// const songCollection = await db.collection('songs').find({}).toArray()

// console.log(songCollection)