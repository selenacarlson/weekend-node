var express = require('express');

var app = express();
var port = 3333;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
});