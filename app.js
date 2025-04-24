const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Import routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});