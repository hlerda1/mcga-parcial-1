// TOKEN IS CURRENTLY HARDCODED THIS IS A PLACEHOLDER UNTIL IMPLEMENTING MONGOOSE
const mongoose = require("mongoose");
const nanoid = require('nanoid');

const { Schema } = mongoose;

nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 60);

const tokenSchema = new Schema({
    name: { type: String, required: true },
        apiKey: {
        type: String,
        default: () => nanoid()
        },
}, { timestamps: true });

module.exports = mongoose.model("Token", tokenSchema);