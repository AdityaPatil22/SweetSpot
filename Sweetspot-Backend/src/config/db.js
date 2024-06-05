const dotenv = require('dotenv');
const mongoose = require("mongoose")

const MONGODB_URL = "mongodb+srv://adityapatil7649:Zu5kFp4eFoHAj1KS@cluster0.edea0zi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () =>{
    return mongoose.connect(MONGODB_URL);
}

module.exports = {connectDb}