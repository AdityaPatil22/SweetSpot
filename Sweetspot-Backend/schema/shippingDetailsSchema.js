import mongoose from "mongoose";

const shippingDetailsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: Number, required: true },
  mobile: { type: Number, required: true },
  cartTotal: { type: Number, required: true },
  orderDate: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

export default mongoose.model("ShippingDetails", shippingDetailsSchema);
