import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("connction secured");
        
})
    mongoose.connection.on('error', (err) => {
        console.log("connection failed", err);
    })

    mongoose.set('strictQuery', true);
    
    // Connect to MongoDB using the URI from environment variables

await mongoose.connect(`${process.env.MONGODB_URI}/form`)
}

export default connectDB;