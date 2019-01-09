const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Portfolio/views/index.html"))
});

app.get('/css/mainportfolio.css', function(req,res){
    res.sendFile(path.join(__dirname+"/Portfolio/css/mainportfolio.css"))
});

app.get('/css/masterportfolio.css', function(req,res){
    res.sendFile(path.join(__dirname+"/Portfolio/css/master.css"))
});

app.get('/images/paralax.jpg', function(req,res){
    res.sendFile(path.join(__dirname+"/Portfolio/images/paralax.jpg"))
});

app.get('/images/vines.jpg', function(req,res){
    res.sendFile(path.join(__dirname+"/Portfolio/images/vines.jpg"))
});


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Portfolio is working on port " + port);
});