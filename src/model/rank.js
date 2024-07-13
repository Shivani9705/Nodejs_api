const mongoose = require("mongoose");

const rankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobno: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const Indiarank = new mongoose.model("athlet", rankSchema);
module.exports = Indiarank;