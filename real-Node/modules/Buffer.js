const buffer = Buffer.from('SKRR')

console.log(buffer) // buffer의 내용 출력
console.log(buffer.length) // buffer의 길이 출력
console.log(buffer.toString()) // buffer를 문자열로 변환


const arr = [Buffer.from('진심으로'), Buffer.from(' 조온나 집에가고'), Buffer.from('싶다 으애애애애앵')]
const bufferJin = Buffer.concat(arr)

console.log(bufferJin.toString())

const buffer3 = Buffer.alloc(5)
console.log(buffer3)