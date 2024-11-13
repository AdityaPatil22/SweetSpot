import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productName: {
        type: String,
        required : true,
    },
    productDescription: {
        type: String,
        required : true,
    },
    productPrice: {
        type: Number,
        required : true,
    },
    productImage: {
        type: String,
    },
    productCategory: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Item", itemSchema)