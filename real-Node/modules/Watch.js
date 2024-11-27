const fs = require('fs');

fs.watch('./test.txt', (eventType, filename) =>{
    console.log(eventType, filename)
})