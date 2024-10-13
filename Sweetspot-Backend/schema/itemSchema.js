import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productName: {
        type: String,
        require : true,
    },
    productDescription: {
        type: String,
        require : true,
    },
    productPrice: {
        type: Number,
        require : true,
    },
    productImage: {
        type: String,
        require : true,
    },
    productCategory: {
        type: String,
        require: true,
    }
})

export default mongoose.model("Item", itemSchema)