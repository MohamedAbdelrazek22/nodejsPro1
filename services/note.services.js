const noteModel = require("../models/note.model")


const addNote=async(req,res)=>{

const {title,description}=req.body
console.log(req.user) ;
    await noteModel.insertMany({title,description,userId:req.user._id,isLogged:true})
res.json({messag:"success"})
}
// -------------------------------------------------
const getNote=async(req,res)=>{

let page=req.query.page
if(page  == undefined || page <=0){
page=1

}
let page_limit=5
let skip=(page-1)*page_limit
// 1-->

// const userId=req.header('userId')
let data=await noteModel.find({/*userId*/}).skip(skip).limit(page_limit)//.populate('userId',' -_id -password')

res.json({page,data})

}
// -------------------------------------------------

const updateNote=async(req,res)=>{
    
    const{noteId,title,description}=req.body
    await noteModel.updateOne({_id:noteId},{title,description})
    
    res.json({message:'updated'})
    
}
// -------------------------------------------------
const deleteNote=async(req,res)=>{

const {noteId}=req.body

await noteModel.deleteOne({_id:noteId})

res.json({message:'deleted'})
}


module.exports = {addNote,getNote,updateNote,deleteNote}