
// http.createServer((req, res) =>{
//     console.log(req.url, req.headers.cookie);
//     res.writeHead(200, {'Set-Cookie': 'myCookie=test'});
//     res.end("<h1>Cookie</h1>")
// })
// .listen(8080, () =>{
//     console.log('8080 포트 서버 대기중')
// })

// const http = require('http');
// const fs = require('fs').promises;
// const path = require('path');

// const parseCookies = (cookie='') =>  // 'name=kyutae;id=tae031105;....'
//     cookie.split(';') // ['name=kyutae', 'id=tae031105',.....]
//     .map(v => v.split('=')) // [[name,kyutae], [id,tae031105], ....]
//     .reduce((acc, [k, v])=>{
//         acc[k.trim()] = decodeURIComponent(v);
//         return acc; // {name : 'kyutae', id : 'tae031105', .....}
//     }, {}); // iterable


// http.createServer(async (req, res) =>{
//     const cookies = parseCookies(req.headers.cookie);
//     if (req.url.startsWith('/login')){ 
//         const url = new URL(req.url, 'http://localhost:8084');
//         const name = url.searchParams.get('name');
//         const expires = new Date();

//         expires.setMinutes(expires.getMinutes() + 3);
//         res.writeHead(302, {
//             Location: '/',
//             'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; path=/`,
//         });
//         res.end();
//     }else if (cookies.name){
//         res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
//         res.end(`${cookies.name}님 반갑습니다.`)
//     }else{
//         try{
//             const data = await fs.promises.readFile(path.join(__dirname, 'cookie.html'));
//             res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
//             res.end(data);
//         }catch (err) {
//             res.writeHead(500, {'Content-Type': 'text/plain; charset=utf8'});
//             res.end(err.message);
//         }
//     }
// }).listen(8084, () =>{
//     console.log('8084번 포토 서버 대기중')
// })

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    console.log(url);
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 3분으로 설정
    expires.setMinutes(expires.getMinutes() + 3);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });