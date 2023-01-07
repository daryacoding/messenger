const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/*
/api/users
SignUp
*/
router.post('/', userCtrl.signUp)
/*
/api/users/login
Login
*/
router.post('/login', userCtrl.login)
/*
/api/users/chats
Get Bookmarks By User
*/
router.get('/chats', userCtrl.getChatsByUser, userCtrl.respondWithChats)

module.exports = router