const express = require('express');
const readFile = require('fs');

const read = readFile.readFileSync('knowledge.json' , 'utf-8');
console.log(read);
const server = express();

server.get('/' , (req , res)=>{

    // res.json([{name : 'john'} , {name : 'susan'}]);
    res.json(read);
})

server.listen(5000 , ()=>{
    console.log("Listening to port 5000.....");
})