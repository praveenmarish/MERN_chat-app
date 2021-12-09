const mongoose = require('mongoose');
const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: [true, 'Please provide atleast two id'],
    },
  },
  { timestamps: false, versionKey: false }
);

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
