import mongoose from "mongoose";

const shippingDetailsSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  zipcode: { type: Number, require: true },
  mobile: { type: Number, require: true },
});

export default mongoose.model("ShipingDetails", shippingDetailsSchema);
