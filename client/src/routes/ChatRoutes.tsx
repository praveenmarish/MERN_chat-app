// Layout imports
import MainLayout from 'layout/MainLayout';

//Chat routing
import Chat from 'views/pages/chat/Chat';

// ==============================|| CHAT ROUTING ||============================== //

const ChatRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'chat',
      element: <Chat />,
    },
  ],
};

export default ChatRoutes;
