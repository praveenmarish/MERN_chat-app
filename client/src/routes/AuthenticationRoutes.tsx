// layouts imports
import MinimalLayout from 'layout/MinimalLayout';

// login and registeration routing
import Login from 'views/pages/auth/Login';
import Register from 'views/pages/auth/Register';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
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
