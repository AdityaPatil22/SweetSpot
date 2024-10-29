import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./dbConnect/mongoConnect.js";
import cors from 'cors';
import addItem from "./api/addItem/addItem.js";
import signUp from "./api/authentication/signUp.js"
import login from "./api/authentication/login.js";
import logout from "./api/authentication/logout.js";
import getItemData from "./api/getItemData/getItemData.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json());

app.post("/api/products", addItem);
app.post("/api/signup", signUp)
app.post("/api/login", login)
app.post("/api/logout", logout)

app.get('/api/items', getItemData);

app.listen(process.env.PORT, async () => {
  try {
    await mongoConnect();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
