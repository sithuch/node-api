const express = require('express');    // this is a third party module

// express app
const app = express();
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');
// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.render('index', {title: 'Homie'});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about',{title: 'About'});    
});
// // redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });
// 404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'});
});