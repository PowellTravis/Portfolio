const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Portfolio/views/index.html"))
});

app.get('/github', function(req, res){
    res.sendFile(path.join(__dirname+"/Portfolio/views/github.html"))
});

app.get('/books', function(req, res){
    res.sendFile(path.join(__dirname+"/Portfolio/views/books.html"))
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname+"/Portfolio/views/contact.html"))
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

app.get('/gitportfolio.json', function(req,res){
    res.sendFile(path.join(__dirname+"/Portfolio/gitportfolio.json"))
});


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Portfolio is working on port " + port);
});

// var app2 = express();
// const PORT2 = process.env.PORT || 4000;

// app2.get('/', function(req, res){
//     res.sendFile(path.join(__dirname+"/App2/views/index.html"))
// });

// var server2 = app2.listen(process.env.PORT || 4000, function () {
//     var port2 = server2.address().port;
//     console.log("Portfolio is working on port " + port2);
// });
