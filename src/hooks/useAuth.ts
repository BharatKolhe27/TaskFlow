import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import  type { RootState, AppDispatch } from '../app/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  return {
    ...auth,
    login: (user: { name: string }) => dispatch(login(user)),
    logout: () => dispatch(logout()),
  };
};