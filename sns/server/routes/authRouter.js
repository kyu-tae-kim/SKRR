const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require("../middleware");
const { join, login, logout } =require('../controller/auth');


const router = express.Router();

// POST /auth/join -> 회원가입
// middleware => isNotLoggedIn
// controller => join
router.post('/join', isNotLoggedIn, join)

// POST /auth/login -> 로그인
// middleware => isNotLoggedIn
// controller => login
router.post('/login', isNotLoggedIn, login)


// GET /auth/logout -> 로그아웃
// middleware => isLoggedIn
// controller => logout
router.get('/logout', isLoggedIn, logout)




module.exports = router;