const express = require('express');    // this is a third party module

// express app
const app = express();
// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
});