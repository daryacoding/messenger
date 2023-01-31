const express = require('express')
const router = express.Router()
const { dataController, apiController} = require('../../controllers/api/friends')

//Create 
router.post('/', dataController.create, apiController.show)

// GET all friends
router.get('/', dataController.index, apiController.index)

// GET friends by user
router.get('/friends/:id', dataController.getUserFriends, apiController.index)

// DELETE /api/followers/:id
router.delete('/:id', dataController.destroy, apiController.show)


module.exports = router