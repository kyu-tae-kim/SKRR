const { Worker, isMainThread, parentPort, workerData }= require('worker_threads')
// worker : 새로운 worker thread를 생성
// isMainThread : 현재 우리가 사용하는 thread가 메인 thread인지 확인 (true/false)
// parentPort : 메인 thread와 다른 worker thread의 연결을 위해 사용
// workerData : 메인 thread에서 worker로 전달되는 데이터 저장

let { findPrime, primes} = require('./prime')

// Worker thread 사용
if (isMainThread) {
    const max = 50_000_000; // 우리가 찾는 소수의 범위값
    const min = 2; // 우리가 찾는 소수의 시작값
    const threadCount = 6; // 실제로 일을 처리할 worker threads 개수 
    const threads = new Set(); // worker thread를 관리하고 추적하기 위한 객체
    const range = Math.floor((max-min) / threadCount); // 각 workers 처리할 숫자의 범위 나누기
    let start = min // 시작값 초기화
    console.time('prime')
    // 워커스레드 생성 작업
    for (let i=0; i < threadCount; i++){
        const wStart =  start; // 현재 워커의 시작 숫자(2, 3천3백만 2....)
        threads.add(new Worker(__filename, {workerData: {start: wStart, range}})) // 워커 생성
        start += range; // 다음 워커의 시작 숫자
    }
    // 이벤트 핸들러
    for (let worker of threads) {
        worker.on('error', (e) =>{
            throw e; // 워커에서 에러 발생시 프로그램 종료
        });
        worker.on('exit', ()=>{
            threads.delete(worker); // 워커가 종료되면 삭제
            if (threads.size === 0){ // 모든 워커가 종료된 상태
                console.timeEnd('prime'); // 최종 시간 측정
                console.log(primes.length); // 소수의 개수
            } 
        });
        worker.on('message', (msg)=>{
            primes = primes.concat(msg) // 워커가 전달한 소수 배열을 메인 스레드 배열에 합산
        })
    }

} else {
    // 각 워커들이 할일
    findPrime(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}




// findPrime(2,1000)
// console.log(primes.length)

