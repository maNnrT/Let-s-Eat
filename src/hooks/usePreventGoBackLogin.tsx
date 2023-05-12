import {getIsLogin } from '@/redux/selectors';
import * as React from 'react'
import { useSelector } from 'react-redux';
interface Props{
    children:React.ReactNode
}
const usePreventGoBackLogin=({children}:Props)=>{
    // const res = 
    // const idUser:number = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).checkLogin).idUser;
  const isLogin: boolean = useSelector(getIsLogin);
    React.useEffect(() => {
      if (isLogin && children) {
        children.history.push('/');
      }
    }, []);
        
}