const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const { routes } = require('./config.json');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/views/index.html"))
});

// Config

// for (route of routes) {
//     app.use(route.route,
//         proxy({
//             target: route.address,
//             pathRewrite: (path, req) => {
//                 return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
//             }
//         })
//     );
// }


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Portfolio is working on port " + port);
});

// Links to research
    // https://itnext.io/hosting-multiple-apps-on-the-same-server-implement-a-reverse-proxy-with-node-a4e213497345
    // https://www.google.com/search?q=how+to+host+multiple+websites+on+different+ports+using+express&rlz=1C5CHFA_enUS795US795&oq=how+to+host+multiple+websites+on+different+ports+using+express&aqs=chrome..69i57.707j0j9&sourceid=chrome&ie=UTF-8