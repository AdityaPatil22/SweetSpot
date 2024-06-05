
const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 5454;
app.listen(PORT, async()=> {
    await connectDb(console.log("Connected to MongoDb"));
    console.log("Server is running on port :" , PORT)
})