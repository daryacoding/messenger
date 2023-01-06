const express = require('express')
const router = express.Router()
const chatController = require('../../controllers/api/chats')

// Index /api/chats
router.get('/', chatController.index, chatController.jsonChats)
// Create /api/chats
router.post('/', chatController.create, chatController.jsonChat)

module.exports = router