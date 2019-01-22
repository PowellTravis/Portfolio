// var config = require('/gitportfolio.json');
// $.ajax({ 
//     type: "GET",
//     dataType: "jsonp",
//     url: "http://localhost:8080/restws/json/product/get",
//     success: function(data){        
//       alert(data);
//     }
//  });
var $ = require('jquery');

$(document).ready(function() { 
    $.ajax({ 
        type: "GET",
        dataType: "jsonp",
        url: "https://api.github.com/users/geerlingguy/repos?per_page=100&page=1",
        success: function(data){        
         alert(data);
        }
    });
});
