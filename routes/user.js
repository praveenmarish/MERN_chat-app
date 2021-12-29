const express = require('express');
const userRoute = express.Router();
const {
  addUser,
  users,
  login,
  getNewAccessToken,
} = require('../controllers/user');
const { protect } = require('../middleware/auth');

userRoute.route('/addUser').post(addUser);
userRoute.route('/login').post(login);
userRoute.route('/users').get(protect, users);
userRoute.route('/refresh').post(getNewAccessToken);

module.exports = userRoute;
