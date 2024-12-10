const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comments');

const router = express.Router();

router.route('/')
.get( async (req, res, next) =>{
    try{
        const users = await User.find();
        res.json(users)
    } catch (err) {
        console.error(err);
        next(err);
    }
})

.post