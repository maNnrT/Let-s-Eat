import { getIsLogin } from '@/redux/selectors';
import { useAppSelector } from '@/hooks/reduxHooks';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogin: boolean = useAppSelector(getIsLogin);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
