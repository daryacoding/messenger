
const router = require('express').Router()
const chatCtrl = require('../../controllers/api/chats')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// add routes
// Index /api/chat
router.get('/', chatCtrl.getChats, chatCtrl.respondWithChats)
// Delete /api/chat/:id
router.delete('/:id', chatCtrl.destroyChat, chatCtrl.respondWithChat)
// Update /api/chat/:id
router.put('/:id', chatCtrl.updateChat, chatCtrl.respondWithChat)
// Create /api/chat
router.post('/', chatCtrl.createChat, chatCtrl.respondWithChat)

module.exports = router