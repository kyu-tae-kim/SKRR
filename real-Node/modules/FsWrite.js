const fs = require('fs').promises

const context = "라따뚜이.."

// promise 형태의 사용법
fs.writeFile('test.txt', context, 'utf8')
    .then(() =>{
        console.log('파일 쓰기 완료')
    }).catch((err) =>{
        console.error(err)
    })

// async await
async function writeFile(path,context) {
    try{
        await fs.writeFile(path, context, 'utf8')
        console.log('파일 쓰기 완료')
    } catch (err) {
        console.log('파일 쓰기 실패', err)
    }
}

writeFile('./test.txt', context)
