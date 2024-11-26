const fs = require('fs')

// console.log('시작')
// fs.readFile('./sample.txt', 'utf8',(err,data) =>{
//     if (err) throw err;
//     console.log('1번', data.toString())
// })
// console.log('끝')


// console.log('시작');
// (async() => {
//     try{

//         const data1 = await fs.promises.readFile('./sample.txt','utf8');
//         console.log('1번',data1,toString());

//         const data2 = await fs.promises.readFile('./sample.txt','utf8');
//         console.log('2번',data2,toString());

//         const data3 = await fs.promises.readFile('./sample.txt','utf8');
//         console.log('3번',data3,toString());

//         const data4 = await fs.promises.readFile('./sample.txt','utf8');
//         console.log('4번',data4,toString());

//     }catch{ (err) => {
//         console.error('에러발생',err);
//     }
//     }
// })();
// console.log('끝');

// 비동기 방식
// fs.readFile('./sample.txt', (err, data) =>{
//     if (err) {throw err}
//     console.log('1번', data.toString())
// });
// fs.readFile('./sample.txt', (err, data) =>{
//     if (err) {throw err}
//     console.log('2번', data.toString())
// });
// fs.readFile('./sample.txt', (err, data) =>{
//     if (err) {throw err}
//     console.log('3번', data.toString())
// });
// fs.readFile('./sample.txt', (err, data) =>{
//     if (err) {throw err}
//     console.log('4번', data.toString())
// });

//동기 방식
const data1 = fs.readFileSync('./sample.txt','utf8');
console.log('1번',data1,toString());

const data2 = fs.readFileSync('./sample.txt','utf8');
console.log('2번',data2,toString());

const data3 = fs.readFileSync('./sample.txt','utf8');
console.log('3번',data3,toString());

const data4 = fs.readFileSync('./sample.txt','utf8');
console.log('4번',data4,toString());
