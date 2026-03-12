const createStream = require('fs');

const readStream = createStream.createReadStream('big-data.txt');

readStream.on('data', (result) => {
    console.log(result);
})