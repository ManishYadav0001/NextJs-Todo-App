import mongoose from "mongoose";

async function connectDB() {

    try {

        await mongoose.connect(`mongodb://localhost:27017/todoApp`)
        console.log("DB CONNECTED SUCCESSFULLY !!!")

    } catch (error) {
        console.log("database connection error", error)
    }

}

export { connectDB }