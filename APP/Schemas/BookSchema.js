const mongoose=require('../DB/DB');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title:String,
  author:String,
  description:String,
  isbn:String,
  publication_date:Date,
})


module.exports=mongoose.model('Book', bookSchema)