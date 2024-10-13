import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./dbConnect/mongoConnect.js";
import cors from 'cors';
import addItem from "./api/addItem/addItem.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/products", addItem);

app.listen(process.env.PORT, async () => {
  try {
    await mongoConnect();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
