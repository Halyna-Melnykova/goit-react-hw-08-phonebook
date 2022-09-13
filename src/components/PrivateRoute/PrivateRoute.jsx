import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isAuth = useSelector(isLogin);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
