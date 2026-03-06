const fileSystem = require('fs');


//this function reads the content of the file
const readFileContent = fileSystem.readFileSync('./content/subfolder/test.txt','utf-8');
console.log(readFileContent);

//this function reads the content 
fileSystem.writeFileSync('./content/subfolder/result.txt',`this is the written text`);
