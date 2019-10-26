require('dotenv').config()
var express = require("express");
var app = express();


app.listen(process.env.SERVER_PORT, function () {
    console.log(`server listening on port ${process.env.SERVER_PORT}`);
})
