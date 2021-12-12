const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const bookRoute=require('./APP/Routes/BookRoute')
const cors = require('cors')

require('dotenv').config()


app.use(cors());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded( {
    extended: true
} ) );


app.use('/library',bookRoute);
app.listen(process.env.PORT);