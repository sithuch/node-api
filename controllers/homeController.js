
const { supabase } = require('../db'); 

exports.homePage = (req, res) => {
  res.render('index', { title: 'Home' });
}
exports.indexPage = (req, res) => {
  res.render('homePage', { title: 'Home Page' });
}

exports.logInPage = (req, res) => {
  res.render('login', { title: 'Home Page' });
}


exports.logInPage = (req, res) => {
  res.render('login', { title: 'Home Page' });
}



