const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bookRoute = require('./APP/Routes/BookRoute')
const cors = require('cors')
const config = require('dotenv').config()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use((err, req, res, next) => {
  if(err){
    res.status(400).json({
      'message': "bad request"
    })
  }
  else{
    next()
  }
})


app.use('/library', bookRoute);
app.listen(process.env.PORT);