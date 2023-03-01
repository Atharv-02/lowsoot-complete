import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/Authcontext';

export function Protected({ children }) {
  const { isuserloggedin } = useAuth();
  const location = useLocation();
  if (!isuserloggedin) {
    console.log({ isuserloggedin });
    localStorage.removeItem('data');
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
}
