import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
    try {
        const dataBaseResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DataBase Connected on HOST: ${(dataBaseResponse.connection.host)}`)
    } catch (error) {
        console.log("Error Connecting To Database:",error)
        process.exit(1)
    }
}

export default connectDB