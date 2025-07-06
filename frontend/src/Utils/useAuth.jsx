import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthSlice.jsx';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user: auth.user,
    token: auth.token,
    loading: auth.loading,
    error: auth.error,
    isAuthenticated: auth.isAuthenticated,
    logout: handleLogout
  };
}; 