// /routes/api/users.js
const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController, getChatsByUser, respondWithChats } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', dataController.create, apiController.auth)
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

// GET /api/users/chats
router.get('/chats', checkToken, ensureLoggedIn, getChatsByUser, respondWithChats)

module.exports = router