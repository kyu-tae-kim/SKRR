const express = require('express');
const path = require('path');
const cors =require('cors')
// router 가져오기
const indexRouter = require('./routes');
const userRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const { sequelize } = require('./models');

const app = express(); 
app.set('port', process.env.PORT || 3000);

// 데이터베이스 연결
sequelize.sync({force: false})
    .then(()=>{
        console.log("데이터베이스 연결 성공")
    })
    .catch((err)=>{
        console.log(err)
    })

// 미들 웨어 설정
app.use(express.static(path.join(__dirname, 'public'))); // static 미들웨어
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// 라우터 설정
app.use('/', indexRouter);  // Root Page
app.use('/user', userRouter);
app.use('/comment', commentsRouter);


// 에러처리 미들웨어
app.use((req, res, next)=>{
    res.status(404).send(`${req.method} ${req.url} 라우터 없음`);
})

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    console.error(err);
    res.status(status).json({ error : err.message});
})

app.listen(app.get('port'), ()=> {
    console.log(`${app.get('port')}번 포트에서 서버 실행중`)
});
