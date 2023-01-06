const { model, Schema } = require('mongoose')

const chatSchema = new Schema({
    message: {required: true, type: String},
    name: String,
},  {
    timestamps: true
})

const Chat = model('Chat', chatSchema)
module.exports = Chat