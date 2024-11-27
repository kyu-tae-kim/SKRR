function longTask() {
    const start = Date.now()
    while (Date.now() - start < 3000){

    }
    console.log("longTask 작업 완료")
}

function firstFunction() {
    setTimeout(()=>{
        console.log('첫번째 함수')
    }, 1000)
};

console.log('시작')
firstFunction();
longTask();
console.log('끝')