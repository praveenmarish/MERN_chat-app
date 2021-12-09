const socketIo = require('socket.io');

const socketServer = (server) => {
  const io = socketIo(server);
  console.log('socket1');
  io.on('connection', (socket) => {
    console.log('socket');
    socket.on('online', async (data) => {
      io.emit('hdiif');
    });
    socket.on('disconnect', () => {
      console.log('disconnected!');
      io.emit('disconnect');
    });
  });
};

module.exports = socketServer;
