
const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const  Crypto=require('crypto-js')

const userSchema = mongoose.Schema({

    name:{
    
      type:String,
      minLength:[3,'too short name']
    },
    email:{
    
      type:String,
      required:true,
    },
    password:{
    
      type:String,
    
    },
    phone:{
type:String

    }
    },{timestamps:true})
    
    userSchema.pre('insertMany',async function (next,docs){
console.log(docs);
docs.password=await bcrypt.hash(docs.password,parseInt(process.env.saltRounds))
docs.phone=await Crypto.AES.encrypt(docs.phone,process.env.encryptkey).toString()
console.log(docs);
next()
    })
//     userSchema.pre('save',async function (docs){
// console.log(this);
// this.password=await bcrypt.hash(this.password,parseInt(process.env.saltRounds))
// this.phone=await Crypto.AES.encrypt(this.phone,process.env.encryptkey).toString()
// console.log(this);
// next()
//     })
    
    const userModel=mongoose.model('user',userSchema)
    module.exports =userModel