const dotenv = require('dotenv').config();
const app = require(".");
const { connectDb } = require("./config/db");


app.listen(process.env.PORT, async()=> {
    await connectDb(console.log("Connected to MongoDb"));
    console.log("Server is running on port :" , process.env.PORT)
})