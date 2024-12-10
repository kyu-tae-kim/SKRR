const express = require('express');
const router = express.Router()
const User = require("../models/Users");
const Comment = require("../models/Comments");

// User 정보를 처리할 API 목록
// 전체 사용자 조회
// 사용자 정보 입력
// 사용자 정보 수정
// 사용자 정보 삭제
// 특정 사용자 검색
// 사용자 ID를 이용한 코멘트 검색

router.route('/').get().post()
.get(async (req, res,next) =>{
    try{
        const users = await User.find();
        res.json(users)
    }catch(err){
        console.error(err)
        next(err)
    }
})
.post(async (req, res, next) =>{  // User 모델의 데이터 입력 요청
    try{
        const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            married: req.body.married,
            comment: req.body.comment
        });
        console.log(user);
        res.end()
    } catch(err) {
        console.error(err);
        next(err)
    }
})



//id를 입력해서 해당 comments 데이터 가져오기
router.get('/:id/comments', async (req, res, next) =>{
    try{
        const comments = await Comment.find({
            commenter: req.params.id
        }).populate('commenter');
        res.json(comments)
    }catch(err) {
        console.error(err)
        next(err);
    }    
})



module.exports = router;