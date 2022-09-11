import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Login
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
