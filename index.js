
// Simple Node.js API

var express    = require('express');
var bodyParser = require('body-parser');

var books = ['The Hobbit', 'Harry Potter', 'Lord of the Rings']

var app = express();

// always parse http body as json
// assigns result to req.body
// 1.
app.use(bodyParser.json());

// 2.
app.get('/books', function(req, res, next){
	res.send(books);
})

// 3.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', function(req, res, next) {
	// req.body = { name: 'three little pigs' }
	books.push(req.body.name);
	res.send(books);
});

// {
// 	"position": 2,
// 	"newName": "The Shining"
// }

// 4.
app.put('/books', function(req, res, next){
	var newPosition = req.body.position; // (req.body) this is from the object that JSON sent back to us
	books[newPosition] = req.body.newName;
	res.send(books);
})


var port = 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});