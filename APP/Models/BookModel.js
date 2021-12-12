const mongoose = require('../DB/DB')
require('../Schemas/BookSchema')
const Book = mongoose.model('Book');

class BookModel {
    static async createBook(title, author, description, isbn, publication_date) {
        await Book.create({
            title: title,
            author: author,
            description: description,
            isbn: isbn,
            publication_date: publication_date,
        })

    }
    static async getBook(isbn) {
        return await Book.findOne({ isbn: isbn })
    }
    static async updateBook(isbn,description){
      return await Book.findOneAndUpdate({isbn:isbn},{description:description})
    }
    static async deleteBook(isbn){
        return await Book.findOneAndDelete({isbn:isbn})
      }
}
module.exports = BookModel;