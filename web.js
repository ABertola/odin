var express = require('express');
 
var app = express();
 
app.get('/', function(req, res) {
    console.log("get main ok");
});
app.get('/partite/:id', function(req, res) {
    res.send({id:req.params.id, casa: "l'oste", ospite: "l'ospite"});
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally


var server=app.listen(port, address);