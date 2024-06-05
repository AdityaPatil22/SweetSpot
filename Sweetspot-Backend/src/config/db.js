const dotenv = require('dotenv').config();
const mongoose = require("mongoose")


const connectDb = () =>{
    return mongoose.connect(process.env.MONGODB_URL);
}

module.exports = {connectDb}