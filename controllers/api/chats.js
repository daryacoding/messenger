// /controllers/api/chats

const Chat = require('../../models/chat')

module.exports = {
    create, 
    index,
    jsonChat,
    jsonChats
}

// jsonChats, jsonChat

function jsonChat(req, res){
    res.json(res.locals.data.chat)
}
function jsonChats(req, res){
    res.json(res.locals.data.chats)
}
// create
async function create(req, res, next){
    try {
        const chat = await Chat.create(req.body)
        console.log(chat)
        res.locals.data.chat = chat
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// read
async function index(req, res, next){
    try {
        const chats = await Chat.find()
        res.locals.data.chats = chats
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// update

// destroy