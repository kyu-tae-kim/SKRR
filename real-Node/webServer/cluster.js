const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    console.log(`마스터 프로세스 : ${process.pid}`) //pid는 프로세스 아이디
    const numCPUs =os.cpus().length
    for (let i=0; i < numCPUs; i++){ // cpu의 개수만큼 워커 생성
        cluster.fork()
    }
    // 워커들이 종료될때마다 실행
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`${worker.process.pid}번 워커 종료`)
        console.log(`code : ${code} / signal : ${signal}`);
        // cluster.fork();
    });
}else {
    http.createServer((req,res) =>{
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end('<h>Cluster</h>');
        setTimeout(()=>{
            process.exit(1);
        }, 3000) // 3초에 하나씩 워커 종료
    }).listen(8080);
    console.log(`${process.pid} 워커 실행`)
}