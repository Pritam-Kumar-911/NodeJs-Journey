const http = require('http');

console.log("Listening to server!!!!");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page');
    }
    else if(req.url === '/about'){
        res.end('This is about page');
    }else
        res.end('Error 404 cannot find resource');
})

server.listen(5000);