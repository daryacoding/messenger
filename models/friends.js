const { Schema, model } = require('mongoose')

const friendSchema = new Schema({
    friendUser: { type: Schema.Types.ObjectId, ref: 'User' },
    userFollowed: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Friend = model('Friend', friendSchema)

module.exports = Friend