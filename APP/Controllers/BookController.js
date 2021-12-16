const  BookModel=require('../Models/bookModel')
class BookController{
    static async  create(title,author,description,isbn,publication_date){
        try{
            if(isbn==undefined ||author==undefined || description==undefined || isbn==undefined || publication_date==undefined){
                return "Missing"
            }
            return await BookModel.createBook(title,author,description,isbn,publication_date)
        }
        catch(err){
                return "Error"
        }
    }
    static async get(isbn){
        try{
            if(isbn==undefined){
                return "Missing"
            }
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
            if(isbn==undefined || description==undefined ){
                return "Missing"
            }
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
            if(isbn==undefined){
                return "Missing"
            }
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