exports.homePage = (req, res) => {
  res.render('index', { title: 'Home' });
}

exports.indexPage = (req, res) => {
  res.render('homePage', { title: 'Home Page' });
}