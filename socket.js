const socketIo = require('socket.io');

const socketServer = (server) => {
  const io = socketIo(server, {
    cors: { origin: process.env.FRONTEND, methods: ['GET', 'POST'] },
  });
  console.log('socket1');
  io.on('connection', (client) => {
    client.on('conversation', (conversationId) => {
      console.log('joined', conversationId);
      client.join(conversationId);
    });
    client.on('message', (msg) => {
      console.log('msg send', msg);
      io.in(msg.conversationId).emit('message-received', msg.message);
    });
  });
};

module.exports = socketServer;
