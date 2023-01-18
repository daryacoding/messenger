require('dotenv').config()
const Chat = require('../../models/chat')
const User = require('../../models/user')

// delete chat
// create chat
// update chat
const getChats = async (req, res, next) =>{
    try {
        const chats = await Chat.find()
        console.log(chats)
        res.locals.data.chats = chats
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
}

const destroyChat = async (req, res, next) => {
    try {
        const deletedChat = await Chat.findByIdAndDelete(req.params.id)
        res.locals.data.chat = deletedChat
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateChat = async (req, res, next) => {
    try {
        const updatedChat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.chat = updatedChat
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createChat = async (req, res, next) => {
    try {
        const createdChat = await Chat.create(req.body)
        console.log(req.body)
/*         const user = await User.findOne({ email: res.locals.data.email })
        user.chats.addToSet(createdChat)
        await user.save() */
        res.locals.data.chat = createdChat
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithChat = (req, res) => {
    res.json(res.locals.data.chat)
}

module.exports = {
    getChats,
    destroyChat,
    updateChat,
    createChat,
    respondWithChat
}