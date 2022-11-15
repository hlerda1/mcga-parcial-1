const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    id:{
        type: String,
        require: true,
        unique: true,
    },
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    stock:{
        type: Number,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("Products", productsSchema);