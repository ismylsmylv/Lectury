import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let client;

export async function GET(request) {
  try {
    if (!client) {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await client.connect();
    }

    const db = client.db(dbName);
    const forumsCollection = db.collection("forums");

    const forums = await forumsCollection.find({}).toArray();

    return NextResponse.json(forums, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!client) {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await client.connect();
    }

    const db = client.db(dbName);
    const forumsCollection = db.collection("forums");

    const result = await forumsCollection.insertOne(body);

    return NextResponse.json(
      { message: "Forum added successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
