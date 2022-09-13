import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = ({ isLogin }) => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>
      {isLogin && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
