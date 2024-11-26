const fs = require('fs');

// const readStream = fs.createReadStream('./chunk.txt', {highWaterMark:16})
// const data = []

// readStream.on('data', (chunk) =>{
//     data.push(chunk);
//     console.log('data :', chunk, chunk.length)
// });

// readStream.on('end', ()=>{
//     console.log('end :', Buffer.concat(data).toString())
// });

// readStream.on('error', (err) => {
//     console.log('error :', err)
// });


// const writeStream = fs.createWriteStream('./emotion.txt')
// writeStream.on('finish', ()=>{
//     console.log('파일 쓰기 완료')
// });

// writeStream.write('I want to go home\n')
// writeStream.write('I want to meet friends\n')
// writeStream.write('I want to play the game\n')
// writeStream.write('I want to meet girlfriend\n')
// writeStream.write('I must need rest time\n')
// writeStream.end()


const readStream = fs.createReadStream('./emotion.txt');
const writeStream = fs.createWriteStream('./sample.txt');


readStream.pipe(writeStream)
