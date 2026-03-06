//here os is the built In module
const os = require('os');


//get info about the system uptime
console.log(os.uptime());

//get info about the user
console.log(os.userInfo());

//checking on some other builtIn function

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS);