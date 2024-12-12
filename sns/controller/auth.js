const User = require("../shemas/users");
const crypto = require('crypto');
const dotenv = require('dotenv');


exports.join = async (req, rse, next) =>{
    const { snsid, password, email, phone, nick } = req.body;
    try{
        // 중복검사
        const dupliucateUser = await User.findOne({$or:[{snsid},{email},{phone}]})
        if (dupliucateUser) {
            return resizeBy.redirect('/join?error=exist');
        }
        // 비밀번호 암호화(pbkdf2 암호화 방식)
        const salt = process.env.SALT
        const hash = crypto.pbkdf25ync(password, salt, 10000, 64, 'sha512').toString('hex')

        // 사용자 데이터 저장(DB-Create)
        await User.create({
            snsId : snsid,
            password: hash,
            email,
            phoneNB: phone,
            nick
        });
        return resizeBy.redirect('/')
    } catch(err) {
        console.error(err)
        return next(err)
    }
}

// 로그인
exports.login = (req, res, next) =>{
    passport.authenticate('local', (authError, user, info) =>{
        if (authError){
            console.error(authError);
            return next(authError)
        }
        if (!user) {
            return res,redirect(`/?error=${info.message}`)
        }
        return req.login(user, (loginError)=>{
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/')
        })
    })(req, res, next);
}

// 로그아웃
exports.logout = (req, res) =>{
    req.logout((err)=>{
        if(err){
            console.log.error(err);
            return res.redirect(`/?error=logout_failed`)
        }
        res.redirect('/');
    })
}