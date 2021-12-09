const {
  conversationId,
  AddMessage,
  MessageList,
  pageCount,
} = require('../utils/dbFunctions');

exports.conversation = async (req, res, next) => {
  const { id } = req.body;
  try {
    let { ConversationId, pageCount } = await conversationId(id);
    res.status(200).json({
      success: true,
      message: 'conversation',
      ConversationId,
      pageCount,
    });
  } catch (err) {
    next(err);
  }
};

exports.messageList = async (req, res, next) => {
  const { conversationId, pageNo } = req.body;
  try {
    let messages = await MessageList(conversationId, pageNo);
    res.status(200).json({ success: true, messages });
  } catch (err) {
    next(err);
  }
};

exports.addMessage = async (req, res, next) => {
  const { conversationId, message, senderId } = req.body;
  try {
    let result = await AddMessage(conversationId, message, senderId);
    res.status(200).json({ success: true, message: 'add', result });
  } catch (err) {
    next(err);
  }
};
