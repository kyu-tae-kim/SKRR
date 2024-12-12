const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxlength: 300
    },
    img: {
        type: String,
        maxlength: 300,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag',
    }],
    likes: {
        type: Number,
        default: 0,
    },
},{
    timestamps: true,
    collection: 'Post'
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post;