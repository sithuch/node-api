const http = require('http');	// this is a core module
const fs = require('fs');	// this is a core module
const _ = require('lodash');	// this is a third party module
const server = http.createServer((req,res)=>{ // this is a callback function that takes in a request and response object
    // console.log(req.url, req.method); // this logs the url and method of the request object to the console
    // set header content type
    // res.setHeader('Content-Type', 'text/plain'); // this sets the content type of the response object to text/plain
    const num = _.random(0, 20); // this generates a random number between 0 and 20
    console.log(num); // this logs the random number to the console
    const greet= _.once(()=>{ // this is a function that can only be called once
        console.log('hello'); // this logs hello to the console
    });
    greet(); // this calls the greet function
    
    res.setHeader('Content-Type', 'text/html'); // this sets the content type of the response object to text/html

    let path = './view/'; // this sets the path variable to the view folder
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; // this sets the status code of the response object to 200
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; // this sets the status code of the response object to 200
            break;
        default:
            path += '404.html';
            res.statusCode = 404; // this sets the status code of the response object to 404
            break;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end(); // this ends the response object
        } else {
            // res.write(data); // this writes the data to the response object
            res.end(data); // this ends the response object
        }
    });
    
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
});