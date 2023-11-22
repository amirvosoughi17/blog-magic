import mongoose from "mongoose";
export const connectToDB = () => {
    mongoose
        .connect(process.env.DB_URI)
        .then(() => {
            console.log("App connected to db");
        })
        .catch((err) => {
            console.log(`Error from database connection ${err.message}`)
        });
}