const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/*
/api/users
SignUp
*/
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)
/*
/api/users/login
Login
*/
router.post('/login', userCtrl.login, userCtrl.respondWithToken)
/*
/api/users/chats
Get Bookmarks By User
*/
router.get('/chats', checkToken, ensureLoggedIn, userCtrl.getChatsByUser, userCtrl.respondWithChats)

module.exports = router