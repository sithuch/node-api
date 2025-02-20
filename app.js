const express = require('express');    // this is a third party module
const morgan = require('morgan');       // this is a third party module
// express app
const app = express();
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');
// listen for requests
app.listen(3000);

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});


app.get('/', (req, res) => {
    
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about',{title: 'About'});    
});

// blog routes
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'});
});