var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

// always parse http body as json
// assigns result to req.body
// 1.
app.use(bodyParser.json());

// 2.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', function(req, res, next) {
		var incoming_body = req.body;
		console.log(incoming_body);
		res.json(incoming_body);
});




var port = 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});