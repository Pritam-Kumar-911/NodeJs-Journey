const path = require('path');


//it gives the path separator
console.log(path.sep);

//it gives file path
const filePath = path.join('\content','subfolder','test.txt');
console.log(filePath);

//it gives baseName of the path
const baseName = path.basename(filePath);
console.log(baseName);

//it gives absolute path
const absolutePath = path.resolve(__dirname , 'content' , 'subfolder' , 'test.txt');
console.log(absolutePath);