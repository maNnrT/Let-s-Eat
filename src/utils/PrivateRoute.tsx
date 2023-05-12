import { getIsLogin } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogin: boolean = useSelector(getIsLogin);
  console.log('check:', isLogin);
  
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
