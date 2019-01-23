const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Photos/views/index.html"))
});

app.get('/instagram', function(req, res){
    res.sendFile(path.join(__dirname+"/Photos/views/instagram.html"))
});

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Photos is working on port " + port);
});
