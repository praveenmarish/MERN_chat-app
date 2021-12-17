import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: route.Props) => {
  return (
    localStorage.getItem("refreshToken") ? <>{children}</> : <Navigate to="/" />
  );
};

export default PrivateRoute;


export declare namespace route {
  export interface Props {
    children: React.ReactNode;
  }
}