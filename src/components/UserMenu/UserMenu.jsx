import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import Button from 'react-bootstrap/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const { name, email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        Welcome {name}! | {email}
      </p>
      <Button variant="primary" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
