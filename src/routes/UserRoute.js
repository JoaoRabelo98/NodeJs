const express = require('express');

const routes = express.Router();

const UserController = require('../controllers/UserController');

routes.get('/user',UserController.index);
routes.get('/user:id', UserController.show);
routes.post('/user',UserController.store);

module.exports = routes;