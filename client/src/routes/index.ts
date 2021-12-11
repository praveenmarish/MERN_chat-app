import { useRoutes } from 'react-router-dom';

// routes
import ChatRoutes from './ChatRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes, ChatRoutes]);
}
