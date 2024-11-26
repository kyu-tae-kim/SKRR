const crypto = require('crypto')

// const hash = crypto.createHash('sha256').update('abcdefghijklmnop').digest('hex');

// // console.log(hash)

// crypto.pbkdf2('abcdefghijklmno', 'addsalt', 100000, 64, 'sha512', (err, derivedkey) => {
//     if (err) throw err;
//     console.log(derivedkey.toString('hex'))
// })



const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('some clear text data', 'utf8', 'base64');
encrypted += cipher.final('base64');

// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'base64', 'utf8');
decrypted += decipher.final('utf8');
