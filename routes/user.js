const express = require('express');
const userRoute = express.Router();
const { addUser, users } = require('../controllers/user');

userRoute.route('/addUser').post(addUser);
userRoute.route('/users').get(users);

module.exports = userRoute;
