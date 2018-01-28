const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const config = require("./config/config")
const path = require("path");
const bodyParser = require("body-parser");

const authen = require("./routers/authen")(router)

mongoose.Promise = global.Promise
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log("connect to mongodb err:", err)
    } else {
        console.log("connect to mongodb success")
    }
})

app.use(express.static(__dirname + '/client/dist/'))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})
app.use(authen);
app.get("/", (req, res) => {
    res.send("noce");
})

app.listen(8080, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("server run at http://0.0.0.0:8080")
    }
})