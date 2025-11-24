
const fs = require('fs');

fs.writeFileSync('./output/temp.txt', 'this is a temp file');

console.log('temp file created');

if(fs.existsSync('./output/temp.txt')){
    console.log('file exists...!!!');

    fs.unlinkSync('./output/temp.txt');
    console.log('file deleted successfully');
}


try{
    fs.unlinkSync('./output/temp.txt');
}catch(err){
    console.log(err.message);
}

fs.writeFile('./output/temp2.txt', 'another temp file', (err)=>{
    if(err) return console.error(err.message);

    console.log('another temp file created');

    fs.unlink('./output/temp2.txt', (err)=>{
        if(err){
           console.error(err.message);
        }else{
            console.log('Temp2 deleted')
        }
    })
});


