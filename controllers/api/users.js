require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).digest('hex').split('').reverse().join('')
        const match = await bcrypt.compare(password, user.password)
        if (!match) throw new Error('Password did not match')
        res.locals.data.user = user
        //res.locals.data.token = createJWT(user)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getChatsByUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate('chats').sort('chats.createdAt').exec()
        const chats = user.chats
        res.locals.data.chats = chats
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/* const respondWithToken = (req, res) => {
    res.json(res.locals.data.token)
} */

const respondWithUser = (req, res) => {
    res.json(res.locals.data.user)
}

const respondWithChats = (req, res) => {
    res.json(res.locals.data.chats)
}

module.exports = {
    signUp,
    login,
    getChatsByUser,
    //respondWithToken,
    respondWithChats,
    respondWithUser
}

/* Helper Function 
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
} 
*/