const Joi=require('joi')

const Schema= Joi.object({

name:Joi.string().alphanum().min(3).max(30),
 email: Joi.string().email({ minDomainSegments: 2 , tlds: { allow: ['com', 'net'] } }),
 password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

})

const validateSignUp=(req,res,next) => {

const {name,email,password} = req.body
    let {error}=Schema.validate({name,email,password},{abortEarly:false})

    if(!error){

        next()
    }else{

res.json({error})

    }

}



module.exports = {validateSignUp}