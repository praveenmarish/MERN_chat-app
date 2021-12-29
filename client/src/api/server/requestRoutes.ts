import { AxiosRequestConfig } from 'axios';

export const Routes: {
  [key: string]: Pick<AxiosRequestConfig, 'method' | 'url'>;
} = {
  userList: { method: 'get', url: 'user/users' },
  userLogin: { method: 'post', url: 'user/login' },
  newUser: { method: 'post', url: 'user/adduser' },
  refresh: { method: 'post', url: 'user/refresh' },
  messages: { method: 'post', url: 'message/messages' },
  initConversation: { method: 'post', url: 'message/conversation' },
  sendMessage: { method: 'post', url: 'message/addmessage' },
};
