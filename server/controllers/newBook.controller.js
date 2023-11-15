const Book = require("../models/newBook.models")
const Comment = require("../models/comments.models")

module.exports = {
    createBook: (req, res) => {



        Book.create(req.body)
            .then(created => res.json(created))
            .catch(err => console.log(err))
    },

    getBooks: (req, res) => {


        Book.find()
            .then(allBooks => res.json(allBooks))
            .catch(err => console.log(err))
    },

    createComment: (req, res) => {
        console.log("comments", req.body)
        Comment.create(req.body)
            .then(created => res.json(created))
            .catch(err => console.log(err))
    },

    getComments: (req, res) => {
        Comment.find({
            bookID: req.params.id
        })
            .then(found => res.json(found))
            .catch(err => console.log(err))
    },

    deleteBook: (req, res) => {
        Book.findByIdAndRemove(req.body.id)
            .then(deleted => res.json(deleted))
            .catch(err => console.log(err))
    },
    deleteAllBooks: (req, res) => {

        console.log('delete all', req.body)
        Book.remove({ _id: { $in: req.body } })
            .then(deleted => res.json(deleted))
            .catch(err => console.log('delete all error', err))
    },

    deleteAllComments: (req,res) => {
        Comment.remove({ _id: { $in: req.body } })
        .then(deleted => res.json(deleted))
        .catch(err => console.log('delete all error', err))
    }

}