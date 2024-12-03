const express = require('express')
const cors = require('cors')
const router = require('./routes')
const imageUpload = require('./routes/imageUpload')
const path = require('path')


const app = express();


let todos = [
    {id:1, title: '연애하기', done:false},
    {id:2, title: '금연하기', done:false},
    {id:3, title: '온천가기', done:false},
    {id:4, title: '24시간 자기',done:true}
]


// 미들웨어 만들기
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/',router);
app.use('/image', imageUpload);

app.listen(3000,()=>{
    console.log('3000번 포트에서 서버 가동중')
})