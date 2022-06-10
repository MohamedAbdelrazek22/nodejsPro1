const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const  jwt  = require('jsonwebtoken');
const  Crypto=require('crypto-js')




const signUp=async(req, res) => {

    const {name,email,password,phone}=req.body

        let user=await userModel.findOne({email})
        if(user){
            // يبقي الايميل موجود قبل كده
            res.json({message:'email is already exists'})
            
        }else{
            //سجل عادي
    //  bcrypt.hash(password,Number(process.env.saltRounds),async function(err,hash){
     
   
    
    // })
    
    await userModel.insertMany({name,email,password,phone})
    res.json({message:'successs'})
    
    }




    }


const signIn=async (req, res)=>{

const {email,password}=req.body

let user=await userModel.findOne({email})

if(user){

const match=await bcrypt.compare(password,user.password)

//login
if(match){
    const token=jwt.sign({_id:user._id,name:user.name},process.env.TokenSignature,{expiresIn:'1h'})
    res.json({message:"Done",token})
      }else{


          //incorrect pass
          
          res.json({message:'incorrect pass'})
      }


}else{

//email is wrong
res.json({message:'incorrect email'})


}



}

const profile=async (req, res) => {

try{
    console.log(req.user);
const find=await userModel.findById(req.user._id)

find.phone=Crypto.AES.decrypt(find.phone,process.env.encryptkey).toString(Crypto.enc.Utf8)

res.json({message:'done',find})
}catch(e){


res.json({message:'error',e})
}


}


module.exports ={signUp,signIn,profile}