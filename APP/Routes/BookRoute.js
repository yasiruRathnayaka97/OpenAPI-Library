const express = require('express')
const router = express.Router()
const BookController = require('../Controllers/BookController')
router.post('/book', async (req, res, next) => {
    var title = req.body.title
    var author = req.body.author
    var description = req.body.description
    var isbn = req.body.isbn
    var publication_date = req.body.publication_date
    var book = await BookController.create(title, author, description, isbn, publication_date)
    if (book == "Error") {
        res.status(500).json({
            'message': "something wrong"
        })
    }
    else if (book == "Missing") {
        res.status(500).json({
            'message': "something missing"
        })
    }
    else {
        res.status(200).json({
            'message': "book description added successfully"
        })
    }
})

router.get('/book', async (req, res, next) => {
    var isbn = req.query.isbn
    var book = await BookController.get(isbn)
    if (book == "NotFound") {
        res.status(200).json({
            'message': "book not found"
        })
    }
    else if (book == "Missing") {
        res.status(200).json({
            'message': "something missing"
        })
    }
    else if (book == "Error") {
        res.status(500).json({
            'message': "something wrong"
        })
    }
    else {
        res.status(200).json(
            book
        )
    }
})

router.put('/book', async (req, res, next) => {
    var description = req.body.description
    var isbn = req.body.isbn
    var book = await BookController.update(isbn, description)
    if (book == "NotFound") {
        res.status(200).json({
            'message': "book not found"
        })
    }
    else if (book == "Missing") {
        res.status(200).json({
            'message': "something missing"
        })
    }

    else if (book == "Error") {
        res.status(500).json({
            'message': "something wrong"
        })
    }
    else {
        res.status(200).json({
            'message': "book description updated succesfully"
        })
    }
})

router.delete('/book', async (req, res, next) => {
    var isbn = req.query.isbn
    var book = await BookController.delete(isbn)
    if (book == "NotFound") {
        res.status(200).json({
            'message': "book not found"
        })
    }
    else if (book == "Missing") {
        res.status(200).json({
            'message': "something missing"
        })
    }
    else if (book == "Error") {
        res.status(500).json({
            'message': "something wrong"
        })
    }
    else {
        res.status(200).json({
            'message': "book details deleted succesfully "
        })
    }
})
module.exports = router