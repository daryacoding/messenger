
const router = require('express').Router()
const chatCtrl = require('../../controllers/api/chats')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/chats/:id
DELETE
destroy chat
*/
router.delete('/:id', checkToken, ensureLoggedIn, chatCtrl.destroyChat, chatCtrl.respondWithChat)
/*
/api/chats/:id
PUT
update chat
*/
router.put('/:id', checkToken, ensureLoggedIn, chatCtrl.updateChat, chatCtrl.respondWithChat)
/*
/api/chats
POST
create chat
*/
router.post('/', checkToken, ensureLoggedIn, chatCtrl.createChat, chatCtrl.respondWithChat)

module.exports = router