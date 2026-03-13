// creating a server with http module and using passing headers and extra data this time instead of only
// passing res.end

const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200 , {'content-type': 'text/html'});
    res.write('<h1> hello i am pritam</h1>')
    res.end();
})

server.listen(5000);