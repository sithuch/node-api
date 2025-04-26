const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');
// Define routes for the home page
routes.get('/', homeController.homePage);

routes.get('/home', homeController.indexPage);
module.exports = routes;