import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';

const UserMenu = () => {
  const { name, email } = useSelector(getUser);
  return (
    <div>
      <p>
        Welcome {name}! | {email}
      </p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
