// dot env
require('dotenv').config(); // dotenv 초기화

// 필요한 모듈 불러오기
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const session = require('express-session');

const app = express(); //서버 생성

const cookieScret = process.env.COOKIE_SCRET
// PORT 설정
app.set('port', process.env.PORT || 3000);


// (공통)미들웨어
// morgan 사용자의 어떤 요청이든 감지
// 리퀘스트와 리스폰스 사이에 있어야하기 때문에 공통미들웨어 위에 작성
app.use((req, res, next) =>{
    console.log("내가 만든 미들웨어")
    const error = new Error("에러 발생");
    error.status = 503
    next(error)
})

app.use(morgan('combined'));
app.use(cookieparser(cookieScret)); // 모든 쿠키에 대해서 사용함.
app.use(session({
    secret: process.env.SESSION_SCRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:60000, httpOnly:true}
}));
app.use(express.static(path.join(__dirname, '')))

//에어 처리 미들웨어
app.use((err, req, res, next)=>{
    res.status(err.status || 500).send(err.message);
})


app.get('/session', (req, res, next ) =>{
    if (req.query.skip){ // session?skip=true
        return next("route")
    }else{
        req.session.data = {name: 'kyutae', role:'admin'}
        res.send("세션정보 저장 완료")
    }
});


app.get('/session', (req, res) =>{
    res.send('다른 라우터 동작')
});



app.get('/session/clear', (req, res) =>{
    // req.session.destroy() // 세션 정보 삭제 (쿠키는 유지)
    res.clearCookie('connect.sid') // 쿠키를 삭제
    res.send("세션을 삭제하였습니다.")
})

app.get('/session/read', (req,res) =>{
    if (req.session){
        res.send(`세션 정보 : ${req.session.data.name}`)
    }else{
        res.send("세션 정보가 없습니다.")
    }
})

// 라우터 
// app.get('/',(req,res) =>{
//     res.send('안녕하세요!')
// }); // res.send 리스폰스를 보냈기 때문에 아래 라우터는 실행이 안됌



// /*은 /category/ 해당 라우터 뒤에 어떤 라우터가 들어오더라도 res.send를 처리함
// app.get('/', (req, res) =>{
//     res.cookie('name', 'kyutae', {
//         maxAge: 60000,
//         httpOnly: true,
//         path:'/',
//         signed: true,
//     })
//     res.send("쿠키 생성 완료")
// });

// app.get('/cookie/read/', (req, res) =>{
//     const userCookie = req.signedCookies.name;
//     if (userCookie) {
//         console.log(req.signedCookies)
//         res.send(`쿠키는 ${userCookie}`)
//         console.log(req.signedCookies)
//     }else{
//         res.send('쿠키 정보가 없습니다.')
//     }
// })

// app.get('/category/note',(req, res) =>{
//     res.send('note')
// });

// app.get('/category/book',(req, res) =>{
//     res.send('book')
// });

// app.get('/category/*',(req, res) =>{
//     res.send('카테고리')
// });

// app.get('/user', (req,res) =>{
//     res.send("user Info")
// });

// app.get('/', (req,res) =>{
//     res.send("good bye")
// });

// app.get('*',(req, res) =>{
//     res.send("404 에러 발생")
// });


// 서버 실행
// listens은 이벤트 리스너 실행되는 코드를 계속 실행할 수 있게 함
// 요청을 받아주고 응답을 주는 역할을 함
app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 서버 대기중`)
})