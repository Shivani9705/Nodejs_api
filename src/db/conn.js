const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/olympics")
    .then(() => { console.log("Database connected") })
    .catch((e) => { console.log(e) })