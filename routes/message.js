const express = require('express');
const messageRoute = express.Router();
const {
  conversation,
  messageList,
  addMessage,
} = require('../controllers/message');

messageRoute.route('/conversation').post(conversation);
messageRoute.route('/messages').get(messageList);
messageRoute.route('/addmessage').post(addMessage);

module.exports = messageRoute;
