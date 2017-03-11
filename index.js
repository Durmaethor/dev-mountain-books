var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

// always parse http body as json
// assigns result to req.body
app.use(bodyParser.json());



var port = 3000;
app.listen(port function(){
    console.log('listening on port ' + port);
});