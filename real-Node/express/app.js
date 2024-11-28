const express = require('express');
const path = require("path");
const morgan = require("morgan");
const fs = require('fs');

const app = express(); // 서버 생성

// 둘다 가능한 포트 설정
// const PORT = process.env.PORT || 3000; // 포트 설정 (1번)
app.set('PORT', process.env.PORT || 3000); // 포트 설정 (2번)

// morgan 미들웨어 사용
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: logStream}));


// 라우터 설정
app.get('/', (req, res) =>{
    res.send('Hello My Express');
});

app.get('/html', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
});

// app.listen(PORT, ()=>{
//     console.log(`${app.get('PORT')}번 포트에서 서버 대기중`) // (1번)
// })

app.listen(app.get('PORT'), ()=>{
    console.log(`${app.get('PORT')}번 포트에서 서버 대기중`) // (2번)
})