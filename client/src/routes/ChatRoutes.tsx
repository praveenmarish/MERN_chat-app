// Layout imports
import MainLayout from 'layout/MainLayout';

//Chat routing
import Chat from 'views/pages/chat/Chat';
import PrivateRoute from './PrivateRoute';

// ==============================|| CHAT ROUTING ||============================== //

const ChatRoutes = {
  path: '/',
  element: <PrivateRoute><MainLayout /></PrivateRoute>,
  children: [
    {
      path: 'chat',
      element: <Chat />,
    },
  ],
};

export default ChatRoutes;
