
const mongoose = require('mongoose')
const noteSchema=mongoose.Schema({


title:{
    type:String

},
description:{
    type:String

},
userId:{
type:mongoose.Schema.Types.ObjectId,ref:'user'
}


},{timestamps:true})
const noteModel=mongoose.model('note',noteSchema)

module.exports =noteModel