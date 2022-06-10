const { auth } = require('../middleWear/auth')
const { signUp, signIn,profile } = require('../services/user.services')
const { validateSignUp } = require('../validation/validation.signUp')

const router = require('express').Router()

router.post('/signUp',validateSignUp,signUp)
router.post('/signIn',signIn)
router.get('/profile',auth(),profile)




module.exports=router