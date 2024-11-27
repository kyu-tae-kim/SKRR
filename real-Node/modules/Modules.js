const os = require('os')
const path = require('path')

// // 현재 경로 알려주는 함수
// console.log(process.cwd())
// // process ID를 알려주는 함수
// console.log(process.pid)
// // Node의 버전을 알려주는 함수
// console.log(process.version)
// // cpu 아키택쳐를 알려주는 함수
// console.log(process.arch)
// // PC의 운영체제를 알려주는 함수
// console.log(process.platform)
//

// // cpu 아키텍쳐
// console.log(os.arch())
// // 운영체제
// console.log(os.platform())
// console.log(os.type())
// // 시스템 호스트 이름
// console.log(os.hostname())
// // cpu 정보
// console.log(os.cpus())
// // 메모리(RAM)
// console.log(os.freemem() / (1000*1000*1000))
// console.log(os.totalmem() / (1000*1000*1000))

// 경로상의 directory 부분 반환
console.log(path.dirname('C:/User/projects/func.js'))
// 경로상의 파일의 확장자 부분 반환
console.log(path.extname('C:/User/projects/func.js'))
// 경로상의 파일의 이름 반환 (투번째 인수 : 제걸할 확장자)
console.log(path.basename('C:/User/projects/func.js'))
console.log(path.basename('C:/User/projects/func.js','.js'))

// 상대경로의 path를 만들때 사용
console.log(path.join('User', 'projects', 'func.js'))
// 현재 위치부터의 절대경로를 만들때 사용
console.log(path.resolve('User', 'projects', 'func.js'))