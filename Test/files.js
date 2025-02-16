const fs = require('fs');
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

// fs.writeFile('./docs/blog1.txt','this is a new file',()=>{
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt','this is a new file',()=>{
//     console.log('file was written');
// });

// directories
if( !fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}
