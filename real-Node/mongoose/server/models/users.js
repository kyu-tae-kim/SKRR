const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    married: {
        type: Boolean,
        default: false,
    },
    comment: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})



module.exports = mongoose.model('Users', userSchema)  // collection -> users
// 소문자화 + 복수화 => User -> user -> users
// users => users