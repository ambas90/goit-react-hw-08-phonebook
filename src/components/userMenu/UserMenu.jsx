import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import useAuth from 'hooks/useAuth';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
