const express = require("express");
require('./src/db/conn.js')

const athletRank = require("./src/model/rank")
const app = express();
// port = process.env.PORT || 3000;

app.use(express.json())


app.get("/", async (req, res) => {
    try {
        res.send("the server has started")
    }
    catch (e) {
        console.log(e);
    }

});
app.post("/data", async (req, res) => {
    try {
        const createData = new athletRank(req.body)
        console.log(req.body)
        const insertDocument = await createData.save();
        res.send(insertDocument);
    }
    catch (err) {
        res.send(err)
    }

})

// app.listen(() => {
//     console.log(`the server is listening at port no. ${port}`);
// })
app.listen(5000)