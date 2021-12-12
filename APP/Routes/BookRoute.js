const express=require('express')
const router=express.Router()
const BookController=require('../Controllers/BookController')
router.post('/book',async (req,res,next)=>{
    var title=req.body.title
    var author=req.body.author
    var description=req.body.description
    var isbn=req.body.isbn
    var publication_date=req.body.publication_date
    if(await BookController.create(title,author,description,isbn,publication_date)!="Error"){
        res.status(200).json({
            'message':"book details added succesfully"
        })
    }
    else{
        res.status(500).json({
            'message':"something wrong"
        })
    }      

})

router.get('/book/:isbn',async (req,res,next)=>{
    var isbn=req.params.isbn
    var book=await BookController.get(isbn)
    if(book!="Error"){
        if(book!="NotFound"){
            res.status(200).json({
                'message':book
            })
        }
        else{
            res.status(200).json({
                'message':"book not found"
            })
        }
        
    }
    else{
        res.status(500).json({
            'message':"something wrong"
        })
    }

})

router.put('/book',async (req,res,next)=>{
    var description=req.body.description
    var isbn=req.body.isbn
    var book=await BookController.update(isbn,description)
    if(book!="Error"){
        if(book!="NotFound"){
            res.status(200).json({
                'message':"book description updated succesfully"
            })
        }
        else{
            res.status(200).json({
                'message':"book not found"
            })
        }
        
    }
    else{
        res.status(500).json({
            'message':"something wrong"
        })
    }


})

router.delete('/book/:isbn',async (req,res,next)=>{
    var isbn=req.params.isbn
    var book=await BookController.delete(isbn)
    if(book!="Error"){
        if(book!="NotFound"){
            res.status(200).json({
                'message':"book details deleted succesfully "
            })
        }
        else{
            res.status(200).json({
                'message':"book not found"
            })
        }
        
    }
    else{
        res.status(500).json({
            'message':"something wrong"
        })
    }



})
module.exports=router