
// Simple Node.js API

var express    = require('express');
var bodyParser = require('body-parser');

var books = ['The Hobbit', 'Harry Potter', 'Lord of the Rings']

var app = express();

// always parse http body as json
// assigns result to req.body
// 1.
app.use(bodyParser.json());

var books_controller = {

	index: function(req, res, next){
		res.send(books);
	},

	build: function(req, res, next) {
		books.push(req.body.name);
		res.send(books);
	},

	update: function(req, res, next){
		var newPosition = req.body.position; // (req.body) this is from the object that JSON sent back to us
		books[newPosition] = req.body.newName;
		res.send(books);
	},

	destroy: function(req, res, next){ 
		books.splice(req.params.id, 1); // this will delete 'Harry Potter'
		res.send(books);
	}
};

// 2.
app.get('/books', books_controller.index);

// 3.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', books_controller.build);

// {
// 	"position": 2,
// 	"newName": "The Shining"
// }

// 4.
app.put('/books', books_controller.update);

// 5.
app.delete('/books/:id', books_controller.destroy); // sets it up so that if the request is books/ANYTHING it will pass ('/books/1')



var port = 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});