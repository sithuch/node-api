const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});
const WriteStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data',(chunk)=>{ // this is an event listener that listens for data events on the readStream object and then executes the callback function that logs the chunk of data to the console when it is received
readStream.on('data',(chunk)=>{
    console.log('----NEW CHUNK----');
    console.log(chunk);
    WriteStream.write('\nNEW CHUNK\n');
    WriteStream.write(chunk);
});

// piping	
readStream.pipe(WriteStream); // this is the same as the above code