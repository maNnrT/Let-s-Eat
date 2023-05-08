import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
import config from '../../../config';
// import { useState } from 'react';
import logo from '../../../assets/svg/Logo.svg';
import cart from '../../../assets/svg/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineMenu } from 'react-icons/ai';
import HeaderMenu, { HeaderItem } from './HeaderMenu';
import { getIsLogin, getIdUserSelector, getTotalQuantitySelector, getUserCartSelector } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '../../../redux/feature/CheckLoginSlice';
import * as React from 'react';
import { getUserCart } from '../../../redux/feature/CartSlice';
function Header(): JSX.Element {
  // const [nav, setNav] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleNav = (): void => {
  //   setNav(!nav);
  // };
  const handleLogOut = () => {
    dispatch(setIsLoginFalse());
    navigate(config.routes.login);
  };
  const isLogin = useSelector(getIsLogin);
  const idUser = useSelector(getIdUserSelector);
  const totalQuantity = useSelector(getTotalQuantitySelector);

  React.useEffect(() => {
    dispatch(getUserCart(idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser]);

  return (
    <div className="flex justify-center h-[100px] w-full absolute top-0  z-[2]">
      <div className="h-full container flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link to={config.routes.homepage}>
            <img src={logo} alt="logo" className="mr-[6.5rem] " />
          </Link>
          <HeaderMenu>
            <HeaderItem title="Homepage" to={config.routes.homepage}></HeaderItem>
            <HeaderItem title="About Us" to={config.routes.aboutus}></HeaderItem>
            <HeaderItem title="Contact" to={config.routes.contact}></HeaderItem>
            <HeaderItem title="Menu Combo" to={config.routes.menucombo}></HeaderItem>
            <HeaderItem title="Shop" to={config.routes.shop}></HeaderItem>
          </HeaderMenu>
        </div>
        <div className="flex items-center justify-end w-auto ">
          {!isLogin ? (
            <>
              <Link to={config.routes.login} className="btn-secondary  w-[10rem] h-[3rem] mr-[2rem]">
                Log in
              </Link>
              <Link to={config.routes.register} className="btn-secondary w-[10rem] h-[3rem]">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <button className="btn-secondary w-[10rem] h-[3rem] mr-[2rem] " onClick={handleLogOut}>
                Log out
              </button>
              <Link to={config.routes.cart} className="relative mr-[5px]">
                <img src={cart} alt="" />
                <div
                  className="
                      font-normal
                      text-[1.2rem]
                      leading-[2rem]
                      flex
                      justify-center
                      items-center
                      absolute
                      top-0
                      right-0
                      w-[1.6rem]
                      h-[1.6rem]
                      bg-secondary
                      rounded-full 
                      translate-x-[50%]
                      translate-y-[-50%]"
                >
                  {totalQuantity}
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
