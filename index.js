const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/views/index.html"))
});

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Portfolio is working on port " + port);
});