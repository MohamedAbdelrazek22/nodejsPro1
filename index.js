
/*9
3----------------------------------------------
populate:

  وتشيله وتحط بياناته مكانه userId بتاخد ال 
 userId بال  find وتعمل  user وتروح علي جدول ال  userId  يعني كانها بتاخد ال 
*****************************************
 populate  دي الخطوات الي بعمل بيها 

(norteModel f):

userId:{type:mongoose.Schema.TYpes.ObjectId,ref:'user'}

(not.services f):

const getNotes ()=>{

  let data =await noteModel.foind({}).poplate('userId دي الحاجه الي عايز ادور بيها','name دي الحاجه ال يعايزها تظهر -id يعني متجبليش ده' ).select('title  note دي الي هو اعرض دي بس بس دي تبع ال ')
}
6----------------------------------------------

validation:
ال هي القواعد الي لازم يمشي عليها وهو بيسجل البيانات
*******************************************
 back وجزء ل ال   front  في جزاين جزء في ال  
Front:websit بس هو مش حمايه لل   ui  دا جزء اختياري تعمله لل 
back:دا لازم يبقي موجود
*****************************************
    كده middleWare فانا بحطها زي 

*****************************************
(user.serives f)

const Joi=require('joi')

const Schema= Joi.object({

name:Joi.string().alphanum(يعني حروف وارقام).min().max(),
 email: Joi.string().email({ minDomainSegments: 2 domain يعني كام, tlds: { allow: ['com', 'net'] } })
password:Joi.String().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/)

})
signUp= ()=>{
  let {error}=Schema.validate({name,email,password},{abortEarly:false})

if(true){


}else{


}
}
7----------------------------------------------

عايز احدد عدد الحاجات الي هتظهرلي
let data=await noteModel.find({/*userId /}).skip(1).limit(3)

*/
/*10
1----------------------------------------------------------
  في السيستم ولا لا login انا عايز اعرف هو عمل   
*************************************************
// authentecation:
 ولالا login  عدي علي صفحه ال   user  يعني ال 
******************************************
token:
headers  دي في ال  token  بيعمله بيبعت ال  request كل  localStorage بياخدها يخزنها في ال  frontEnd وال  signIn بيعمل  user هي حاجه بتتكون لما ال 
*** ولالا login  عمل user واقولك اذا كان ال   id,name مثلا  sign in البيانات الي بنبعتها مثلا  وانا بعمل  ***
*** ممطن حد ياخدها يفكها يعرف الي فيها pass بس مينفعش  id اي بيانات مهمه يعني مثلا تحط  token مينفعش تحط في ال ***
*************************************************
npm i jsonwebtoken
jwt .io دا الموقع
*************************************************
var jwt=require('jsonwebtoken')
var token=jwt.sign({foo:'sa' token الداتا الي انت عايز تخزنها في ال },'shhh' verify signeture ال )

لما تيجي تفكها
var decoded=jwt.verify(token,'shhh')
******************************************
(user services f)

var jwt=require('jsonwebtoken')

signin=()=>{

  if(match){
const token =jwt.sign({_id:user._id,name:user.name,isLoggedIn:true},'shhh')
res.json({message:"Done",token})
  }
******************************************
(env f)
tokenSignature=wee6s1912
}
****************************************
(middle weer f)
const auth()=>{

return async (req,res,next)=>{

  log(req.headers)
  const headerToken=req.headers['authotriztion ' headers دا الي انا بعته في ال ]
  if(  ||   || || || ){

    log('invalid Token')
  }else{
    const decoded=jwt.verify(headerToken,process.env.tokenSignature)
    *** token هنا انا فكيت ال ***
    const findUser=await userModel.findById(decoded.id)
    *** null,{} يا بترجع find ومعرفه ال  Id هنا هيدور بال 
    if(!findUser){
    *** notNull يعني ***
    log('error')
  }else{
req.user=findUser
    ***  بتاعها جاجه req اقدر اخزن في ال  middleWare بقول هنا بما انها ***

next()
    }
  }
}
}
module.exports={auth}
****************************************
(note services )
addNote ()=>{


  await noteModel.insertMany({ , , userId:req.user._id}).select('id email')
}

****************************************
(note.routes f)

post(auth(),addNote)

2 ----------------------------------------------------------
  tokken  طب افرض حد عرف ال 
  (auth( ) f)
  jwt.verify(token,'wrong-secret',function(err,decoded){

  })
  Trycatch  او 
*******************************************************
  هزود كمله سر في الاول عشان اتاكد انها جايها من ال فونت كانوع من انواع زياده الامان
********************************************************
(auth )
try{

const headerToken=req.headers['Authorization']

if( || !headerToken.startWih('asc'))
}else{
const token=headerToken.split(' ')[1]
***يعني شيلي المسافه الي في الاول وهاتلي الجزء الي بعد المسافه***
if(!token || || || ){

log('errorr')
 }else{
    const decoded=j wt.verify(headerToken,process.env.tokenSignature)
    *** token هنا انا فكيت ال ***
    const findUser=await userModel.findById(decoded.id)
    *** null,{} يا بترجع find ومعرفه ال  Id هنا هيدور بال 
    if(!findUser){
    *** notNull يعني ***
    log('error')
  }else{
req.user=findUser
    ***  بتاعها جاجه req اقدر اخزن في ال  middleWare بقول هنا بما انها ***

next()
    }
  }

}

}
*******************************************************
(env )
bearereToken=Bearer
******************************************************
(auth )
if( !headerToken.startWih(`${process.envbeadrerToken} ` ))

********************************************************
  عشان متفضلش مسجل علي  طول وعشان ميفضلش فاتح علي طول login  بتحدد وقت لل 
(user services f)
signIn()=>{

const token=   ,{expiresIn:30 '1h'}


}
3 ----------------------------------------------------------
hookies:

وانا رايح عيل الداتا بيز او وانا راجع او انا في الداتا بيز action بستخدمها عشان اعمل   mongoose هي حاجه في ال  
pre  وانت  رايح اسمه 
 post  وانت راجع اسمه 

**********************************************************
bereypt  او ال  incrypt فايدتها اننا نعمل 
EX:
user.services  في ال  hash password يعني مثلا بيقولك ان بقباش لازم نعمل كود ال 
**********************************************************
(user.model )
const bcrypt=require('bcrypt')
EX:
***schema اسم ال  userScema.pre يعني وانت لسه رايح('insertMany' user.services دي نفس الكمله في ال ,async function(next,docs){

log(docs)

} )
*** sign up من ال  send عنعمل ***
docs.password=await bcrypt.hash(docs.password,Number(process.env.saltRounds)

log(docs)
next()
*** password اعمل تشفير لل   insertMany  يعني هنا الفكره قولتله وانت رايح تعمل ****
***mongooosejs.com/docs mongooose دا موقع بتاع ال ****
**********************************************************
***increption وامتي استخدم ال  hashing امتي استخدم ال *** 
***hashing: كده حاجه عايز اشفرها    pass    زي ***
***increption: باخد الداتا بشفرها واخزنها في الدالتا بيز ولما اجي اعرضها بفكهال وارجعها للصوره العاديه***
***increption :  دي لما بفكها  plann text  الي هي الداتا الي بشفرها واحاجه اسمهاcyfar text فيها حاجه اسمها ***
************************************************************
npm i crypto-js
***********************************************************
(user.model)
var Crypto=require('crypto-js')
// Ebcrypt
var cipghertext=Crypto.JES.encrypt('المفتاح او كمله السر','الداتا الي انت عايز تشفرها').tostring()
EX:
(user services )--------------------
***sign up في ال  phone هاروح ازود ***
(.env)---------------------------
process.env.encryptkey=asas
(user.model)------------------------------
***schema فيال  phone هنزود ***
userScema.pre('insertMany',async function(next,docs){

docs.phone=CryptoJS.AES.encrypt(docs.phone,process.env.encryptkey).toString()
  
})
//Decrypt
var bytes= Crypto.JS.AES.decrypt(دي التشفيره ciphertext,'secret key')
var originalText=bytes.toString(CryptoJS.enc.Utf8)

EX:
const CryptoJS=require('crypto-js')


module.exports.profile=async (req,res)=>{

const user=await userModel.findById(req.user._id)
user.phoneCryptoJS.AES.decrypt(user.phone,process.env.encryptkey).toString(CrptoJS.enc.Utf8)

res.json({message:'done',user})
}
(user.router)
router.post('/ptofile',auth,ptofile)
4----------------------------------------------------------
// عايزيين  نرفع المشروع علي السيرفر

1- mongoo atlas  هنعمل ايميل علي ال 
2- index.js ل app.js هنغير اسم 
3- "engines":{ "node":14}   scripts"{ "start" :"node ondex.js"}    main:'index.js' هنغير ال  package.json هنروح لل 
4- vercel.json لازم يبقي عندنا ملف اسمه 
5- واخد اللينك الي هيطلعه idon't have mongoose واقوله connect اعمل mongoose هروح موقع ال 
*/


const express = require('express')
const { dbconnection } = require('./config/dbConn')
const app = express()
require('dotenv').config()
const port = process.env.PORT
app.use(express.json())
const {userRouter,noteRouter}=require('./Router/allRouters')


app.use('/api/users/',userRouter)
app.use('/api/notes/',noteRouter)
// app.use('/api/notes/',userRouter)




app.get('*',(req,res)=>{

  res.send({message:"wrong end point"})
  
  })

dbconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




