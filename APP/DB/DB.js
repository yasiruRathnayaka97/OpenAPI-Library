const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.DB_URI);
const db=mongoose.connection;

db.on('error',(err)=>{
  console.log('mongoDB connection error');
});
db.once('open',()=>{
  console.log('mongoDB connection success');
});

module.exports=mongoose