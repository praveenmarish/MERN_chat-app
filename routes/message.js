const express = require('express');
const messageRoute = express.Router();
const {
  conversation,
  messageList,
  addMessage,
} = require('../controllers/message');
const { protect } = require('../middleware/auth');

messageRoute.route('/conversation').post(protect, conversation);
messageRoute.route('/messages').post(protect, messageList);
messageRoute.route('/addmessage').post(protect, addMessage);

module.exports = messageRoute;
