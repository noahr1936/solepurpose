import { Collection, Db, Document, MongoClient, WithId } from "mongodb";
import clientPromise from "./mongoPromise";

const databaseName = process.env.MONGODB_DATABASE ?? "Solepurpose";

export async function getDb(optionalDatabaseName?: string): Promise<Db> {
    const conn = await clientPromise;

    if (!conn) {
        //TODO: this error needs to be handled
        throw new Error("Error connecting to MongoDB database. I still need to be handled");
    }
    return conn.db(optionalDatabaseName ?? databaseName);
}
