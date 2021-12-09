// Layout imports
import MainLayout from 'layout/MainLayout';

// User and Chat routing
import Users from 'views/pages/chat/Users';
import Chat from 'views/pages/chat/Chat';

// ==============================|| CHAT ROUTING ||============================== //

const ChatRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'users',
      element: <Users />,
    },
    {
      path: 'chat',
      element: <Chat />,
    },
  ],
};

export default ChatRoutes;
