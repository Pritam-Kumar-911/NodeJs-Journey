const express = require('express');
const path = require('path');

const server = express();

server.use(express.static('./Rock-Paper-Scissor-Game'));

// server.get('/' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/index.html'));
// })


// server.get('/style.css' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/style.css'));
// })

// server.get('/images/rock.png' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/images/rock.png'));
// })
// server.get('/images/paper.png' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/images/paper.png'));
// })
// server.get('/images/scissors.png' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/images/scissors.png'));
// })

// server.get('/script.js' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname , './Rock-Paper-Scissor-Game/script.js'));
// })


// server.all('' , (req,res)=>{
//     res.status(404).send('Resource not found!');
// })

server.listen(5000 , ()=>{
    console.log("Server is Listening to Port 5000.....");
});


