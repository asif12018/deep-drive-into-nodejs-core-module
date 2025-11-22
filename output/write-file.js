
const fs = require('fs');

const content1 = 'This is a content \n nodejs is awesome!!';

console.log('File writing start...')

try{
    fs.writeFileSync('./output/test-sync.txt', content1);
    console.log('file written')
    const data = fs.readFileSync('./output/test-sync.txt', 'utf-8');
    console.log(data);
}catch(err){
   console.error('error: ',err.message);
}