
// Simple Node.js API

var express    = require('express');
var bodyParser = require('body-parser');

var booksCtrl = require('./controllers/books_controller'); // Gives access to the controller file by wrapping the whole thing in a self calling function

var app = express();

// always parse http body as json
// assigns result to req.body
// 1.
app.use(bodyParser.json());

// 2.
app.use(function(req, res, next){
	console.log(req.body);
	if(req.body.isQuery === false) {
		next();
	}
	// lots of code that handles queries specifically
	console.log('is a query!!');
	next();
});

// 3.
// next function
app.use(function(req, res, next){
	console.log(req.params);
});








// 2.1
app.get('/books', bookctrl.index);

// 2.2
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', booksCtrl.build);

// 2.3
app.put('/books', booksCtrl.update);

// 2.4
app.delete('/books/:id', booksCtrl.destroy); // sets it up so that if the request is books/ANYTHING it will pass ('/books/1')






var port = 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});