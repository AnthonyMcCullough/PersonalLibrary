const mongoose = require('mongoose'); 
const { Schema } = require('mongoose')

const commentSchema = new Schema({
bookID: Schema.Types.ObjectId,
comment:String

})

const Comment = new mongoose.model('Comments',commentSchema)

module.exports = Comment