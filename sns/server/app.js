const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');



// router import
const pageRouter = require('./routes/pageRouter');
const authRouter = require('./routes/authRouter')




dotenv.config()

const app = express();
app.set('port',process.env.PORT || 3000);
mongoose.connect(process.env.DB_URI)
.then(()=> {
console.log('Db 연결 성공')
})
.catch((err) =>{
    console.log(err)
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false, 
    saveUninitialized: false,
    secret: process.env,COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secuire: false,
        maxAge: 1000 * 60 * 5
    }
}))

app.use(passport.initialize());
app.use(passport.session());



app.use('/',pageRouter);
app.use('/auth', authRouter);

app.use((req,res,next)=>{
    const error = newError(`${req.method} ${req.url} 라우터 없음`)
    err.status = 404;
    next(err)
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.status(err.status || 500).json({error:message})
})


app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')} 한조 대기중`)
})
