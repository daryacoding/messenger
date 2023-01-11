
const router = require('express').Router()
const chatCtrl = require('../../controllers/api/chats')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// add routes
// Index /api/chat
//router.get('/', checkToken, ensureLoggedIn, chatCtrl.index, chatCtrl.respondWithChat)
// Delete /api/chat/:id
router.delete('/:id', checkToken, ensureLoggedIn, chatCtrl.destroyChat, chatCtrl.respondWithChat)
// Update /api/chat/:id
router.put('/:id', checkToken, ensureLoggedIn, chatCtrl.updateChat, chatCtrl.respondWithChat)
// Create /api/chat
router.post('/', checkToken, ensureLoggedIn, chatCtrl.createChat, chatCtrl.respondWithChat)

module.exports = router