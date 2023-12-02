import mongoose from "mongoose";
export async function connect () {
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log("App connected to db");
    });
    connection.on("error", (error) => {
        console.log('error from database connection', error);
        process.exit(1)                 
    });
}