const http = require('http');
const fs = require('fs');

const createServer = http.createServer((req , res)=>{
    // const read = fs.readFileSync('big-data.txt');
    // res.end(read);

    const readStream = fs.createReadStream('big-data.txt','utf-8');
    readStream.on('open' , ()=>{
        readStream.pipe(res);
    })
    
})


createServer.listen(5000);
