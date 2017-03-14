
// Books Controller

var books = require('../models/book')

   module.exports = {

        index: function(req, res, next){
            if(req.query.rating) {
                var rating = parseInt(req.query.rating);
                var ratedBooks = [];
                books.forEach(function(element, index, array){
                    if (book.rating === rating) {
                        ratedBooks.push(book);
                    }
                });
                res.send(ratedBooks);
            } else {
                res.send(books);
            }
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

