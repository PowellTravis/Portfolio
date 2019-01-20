const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;
const app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/App2/views/index.html"))
});

var server = app.listen(process.env.PORT || 4000, function () {
    var port = server.address().port;
    console.log("App2 is working on port " + port);
});
