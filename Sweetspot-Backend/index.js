import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./dbConnect/mongoConnect.js";
import cors from 'cors';
import addItem from "./api/addItem/addItem.js";
import signUp from "./api/authentication/signUp.js"
import login from "./api/authentication/login.js";
import logout from "./api/authentication/logout.js";
import getItemData from "./api/getItemData/getItemData.js";
import getShippingDetails from "./api/getShippingDetails/getShippingDetails.js";
import addShippingDetails from "./api/addShippingDetails/addShippingDetails.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://sweets-spot.netlify.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true 
}));

app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await mongoConnect();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/products", addItem);
app.post("/api/signup", signUp)
app.post("/api/login", login)
app.post("/api/logout", logout)
app.post("/api/shipping", addShippingDetails)

app.get('/api/items', getItemData);
app.get('/api/shippingdetails', getShippingDetails);

