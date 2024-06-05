const mongoose = require("mongoose")
const { eventNames } = require("..")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        default: "CUSTOMER"
    }
})