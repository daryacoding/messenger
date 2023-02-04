const { model, Schema } = require('mongoose')

const chatSchema = new Schema({
    poster:{type: Schema.Types.ObjectId, 
        ref: 'User'},
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {required: true, 
        type: String},
},  {
    timestamps: true
})

const Chat = model('Chat', chatSchema)

module.exports = Chat