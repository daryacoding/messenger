
const router = require('express').Router()
const chatCtrl = require('../../controllers/api/chats')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/chats/:id
DELETE
destroy chat
*/
router.delete('/:id', chatCtrl.destroyChat, chatCtrl.respondWithChat)
/*
/api/chats/:id
PUT
update chat
*/
router.put('/:id', chatCtrl.updateChat, chatCtrl.respondWithChat)
/*
/api/chats
POST
create chat
*/
router.post('/', chatCtrl.createChat, chatCtrl.respondWithChat)

module.exports = router