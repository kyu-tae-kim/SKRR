const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/html ; charset=utf8'});
    res.write('<h1>Hello World</h>');
    res.end('<p>Node Server</p>');
}).listen(8080, ()=>{
    console.log('8085포트에서 서버 대기중')
})

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html ; charset=utf8'});
    res.write('<h1>Hello World</h1>');
    res.end('<p>Welcome 8086</p>');
}).listen(8086, ()=>{
    console.log('8086포트에서 서버 대기중')
})