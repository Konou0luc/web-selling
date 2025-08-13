import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo connecté avec succès")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

export default ConnectDB;