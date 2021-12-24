import SocketIo, { Socket } from 'socket.io-client';
import { ApiConfig } from 'constants/apiConfig';
import { DefaultEventsMap } from '@socket.io/component-emitter';

var socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;

export const socketConnection = () => {
  if (socket === null) {
    socket = SocketIo(ApiConfig.baseURL);
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('connect_error', (error) => {
      console.log(error);
    });
  }
};

export const joinConversation = (conversationId: string) => {
  console.log('joined to conversation');
  socket?.emit('conversation', conversationId);
};

export const sendMsg = (message: {
  message: string;
  conversationId: string;
}) => {
  console.log('message send');
  socket?.emit('message', message);
};

export const receiveMessages = (callback: (receivedMsg: string) => void) => {
  socket?.on('message-received', (receivedMessages) => {
    callback(receivedMessages);
  });
};
