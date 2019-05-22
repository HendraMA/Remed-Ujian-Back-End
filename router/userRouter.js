const router = require('express').Router()
const { addUser,getAllUser,getUserById,getUserByUsername } = require('./../controllers').userController


router.post('/addUser' ,addUser)
router.get('/getAllUser' ,getAllUser)
router.get('/getUser/:terserah' , getUserById)
router.get('/user' , getUserByUsername)

module.exports = router