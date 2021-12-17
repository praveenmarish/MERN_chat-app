// layouts imports
import MinimalLayout from 'layout/MinimalLayout';
import { Navigate } from 'react-router-dom';

// login and registeration routing
import Login from 'views/pages/auth/Login';
import Register from 'views/pages/auth/Register';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AccessToken = localStorage.getItem("accessToken")

const AuthenticationRoutes = {
  path: '/',
  element: AccessToken ? <Navigate to='chat' /> : <MinimalLayout />,
  children: [
    {
      path: '',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
  ],
};

export default AuthenticationRoutes;
