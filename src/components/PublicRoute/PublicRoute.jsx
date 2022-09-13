import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {
  const isAuth = useSelector(isLogin);
  if (isAuth) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
