

const path = require('path');

console.log('Current file info: \n');
console.log('fileName:', __filename);
console.log('directory: ', __dirname);

console.log("\n"+"-".repeat(50) + "\n");

const filePath = "/asif/documents/nextLevel.pdf";

console.log("analyzing Path : ", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));
console.log("base name: ", path.basename(filePath));
console.log("file extension: ", path.extname(filePath));
console.log("file name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n"+"-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log('parsed path: ', parsed);

console.log('formatted path:', path.format(parsed));