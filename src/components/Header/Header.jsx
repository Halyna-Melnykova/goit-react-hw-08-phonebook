import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import HeaderAuth from 'components/HeaderAuth/HeaderAuth';
import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selectors';
import s from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(isLogin);
  return (
    <header className={s.header}>
      <Navigation isLogin={isAuth} />
      {isAuth ? <UserMenu /> : <HeaderAuth />}
    </header>
  );
};

export default Header;
