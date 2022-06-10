const { auth } = require('../middleWear/auth')

const {addNote,getNote, updateNote, deleteNote} = require('../services/note.services')

const router = require('express').Router()


router.post('/addNote',auth(),addNote)
router.get('/getNote',getNote)
router.put('/updateNote',updateNote)
router.delete('/deleteNote',deleteNote)




module.exports =router