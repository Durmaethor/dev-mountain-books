
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
app.get('/books', bookctrl.index);

// 3.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', booksCtrl.build);

// {
// 	"position": 2,
// 	"newName": "The Shining"
// }

// 4.
app.put('/books', booksCtrl.update);

// 5.
app.delete('/books/:id', booksCtrl.destroy); // sets it up so that if the request is books/ANYTHING it will pass ('/books/1')



var port = 3000;
app.listen(port, function(){
    console.log('listening on port ' + port);
});