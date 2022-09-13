import { NavLink } from 'react-router-dom';
import s from './HeaderAuth.module.css';
const HeaderAuth = () => {
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Login
      </NavLink>
      <span>|</span>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Register
      </NavLink>
    </div>
  );
};

export default HeaderAuth;
