var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'localhost:5001',
    ServerTwo = 'localhost:5002',
    ServerThree = 'localhost:5003';
 
app.all("/", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});

app.listen(5000);