const mongoose = require('mongoose'); 
const { Schema } = require('mongoose')

const bookSchema = new Schema({

    title: String
   

})

const Book = new mongoose.model('book',bookSchema)

module.exports=Book