
const  jwt  = require('jsonwebtoken');
const userModel = require('../models/user.model');

const auth=()=>{



return async(req,res,next)=>{
    try{

console.log(req.headers['authorization']);

const headerToken=req.headers.authorization
if(!headerToken || headerToken == null || headerToken.length == 0 || headerToken == undefined  || !headerToken.startsWith(`${process.env.bearerToken} `)){


    res.json({message:"invalid-header token bearer "})

}else{
    const token=headerToken.split(' ')[1]
    if(!token || token == null || token.length == 0 || token == undefined ){
    res.json({message:'invalid token'})
    
    }else{

console.log(token);
    const decoded=jwt.verify(token,process.env.TokenSignature)
    console.log(decoded);
const findUser=await userModel.findById(decoded._id).select('name email')
if(!findUser){

res.json({message:'You are not login'})

}else{
req.user=findUser
    next()
}
}
}
}catch(err){
res.json({message:"catch error token ",err})

}
}

}
module.exports ={auth}