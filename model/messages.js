const mongoose = require('mongoose');
const MessagessSchema = new mongoose.Schema(
  {
    ConversationId: {
      type: String,
      required: [true, 'Please provide conversationId'],
    },
    senderId: {
      type: String,
      required: [true, 'Please provide senderId'],
    },
    message: {
      type: String,
      required: [true, 'Please provide message'],
    },
  },
  { timestamps: true, versionKey: false }
);

const Messages = mongoose.model('Messages', MessagessSchema);

module.exports = Messages;
