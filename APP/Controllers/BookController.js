const  BookModel=require('../Models/bookModel')
class BookController{
    static async  create(title,author,description,isbn,publication_date){
        try{
            return await BookModel.createBook(title,author,description,isbn,publication_date)
        }
        catch(err){
                return "Error"
        }
    }
    static async get(isbn){
        try{
            var book=await BookModel.getBook(isbn)
            if(book==null){
                return "NotFound"
            }
            else{
               return book
            }
        }
        catch(err){
            return "Error"
        }
    } 

    static async update(isbn,description){
        try{
            var book=await BookModel.updateBook(isbn,description)
            if(book==null){
                return "NotFound"
            }
            else{
                return book
            }
        }
        catch(err){
            return "Error"
        }
    } 

    static async delete(isbn){
        try{
            var book=await BookModel.deleteBook(isbn)
            if(book==null){
                return "NotFound"
            }
            else{
                return book
            }
        }
        catch(err){
            return "Error"
        }
    } 
    }

module.exports=BookController;