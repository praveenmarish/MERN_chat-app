const User = require('../model/user');
const Conversation = require('../model/conversation');
const Messages = require('../model/messages');

module.exports.create_User = async (username, password) => {
  return await User.create({
    username,
    password,
  });
};

module.exports.show_Users = async () => {
  return await User.find({});
};

module.exports.conversationId = async (id) => {
  const ConversationId = await Conversation.findOne({ members: { $all: id } });
  let pageCount = 0;
  if (ConversationId === null) {
    let newConId = await Conversation.create({
      members: id,
    });
    return { ConversationId: newConId._id, pageCount };
  } else {
    pageCount = await Messages.find({
      ConversationId: ConversationId._id,
    }).count();
    return {
      ConversationId: ConversationId._id,
      pageCount: Math.ceil(pageCount / 10),
    };
  }
};

module.exports.AddMessage = async (ConversationId, message, senderId) => {
  return await Messages.create({
    ConversationId,
    message,
    senderId,
  });
};

module.exports.MessageList = async (ConversationId, pageNo) => {
  return await Messages.find({ ConversationId })
    .sort({ _id: -1 })
    .skip((pageNo - 1) * 10)
    .limit(10);
};
