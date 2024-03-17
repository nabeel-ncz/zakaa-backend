import mongoose from "mongoose";
import { config } from "@/_boot/config";

export default async () => {
    try {

        const conn = await mongoose.connect(`${config.mongo.host}/${config.mongo.database}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`🍃 Database Established connection with MongoDB`);
        console.log(`@-${conn.connection.host}`)

    } catch (error: any) {

        console.error(`❌ Database Connection failed`);
        console.error(error.message);
        process.exit(1);

    }
}