import config from '@/config';
import logo from '@/assets/svg/Logo.svg';
import cartImg from '@/assets/svg/cart.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import HeaderMenu, { HeaderItem } from './HeaderMenu';
import { getIsLogin, getIdUserSelector, getTotalQuantitySelector, getUserCartSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '@/redux/features/checkLogin/CheckLoginSlice';
import * as React from 'react';
import { getCartTotal, getUserCart } from '@/redux/features/cart/CartSlice';
import { Item } from '@/types/types';
import Search from './Search/Search';
import { getProducts } from '@/redux/features/products/ProductsSlice';
import useScrollDirection from '@/hooks/useScrollDirection';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const [scrollDirection, transparent] = useScrollDirection();
  const [nav, setNav] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const handleNav = (): void => {
    setNav(!nav);
  };
  const handleLogOut = () => {
    dispatch(setIsLoginFalse());
  };
  const isLogin: boolean = useSelector(getIsLogin);
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const totalQuantity: number = useSelector(getTotalQuantitySelector);
  const cart: Item[] = useSelector(getUserCartSelector);
  React.useEffect(() => {
    if (idUser) dispatch(getUserCart(idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser]);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  React.useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div
      className={`flex justify-center h-[7.5rem] w-full fixed top-0 z-[2] duration-500 ease-in-out transition-all 
      ${scrollDirection === 'down' ? 'top-[-7.5rem]' : 'top-0'}
      ${transparent ? 'bg-transparent' : 'bg-primary'}`}
    >
      <div className="h-full container flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link to={config.routes.homepage}>
            <img src={logo} alt="logo" className="mr-[4.7rem] " />
          </Link>
          <HeaderMenu>
            <HeaderItem title="Homepage" to={config.routes.homepage}></HeaderItem>
            <HeaderItem title="About Us" to={config.routes.aboutus}></HeaderItem>
            <HeaderItem title="Contact" to={config.routes.contact}></HeaderItem>
            <HeaderItem title="Menu Combo" to={config.routes.menucombo}></HeaderItem>
            <HeaderItem title="Shop" to={config.routes.shop}></HeaderItem>
          </HeaderMenu>
        </div>
        <Search />
        <div className="hidden tablet:flex items-center justify-end w-auto ">
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
              <Link to={`${config.routes.cart}`} className="relative mr-[5px] hover:scale-150 hover:duration-500">
                <img src={cartImg} alt="" />
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
        <div className="tablet:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </div>
        <div
          className={
            !nav
              ? 'fixed top-0 bg-primary w-[48vw] h-[32rem] right-0 pt-[8rem] pl-[1.6rem] pb-[4.4rem] ease-in-out duration-500 tablet:hidden'
              : 'fixed top-0 bg-primary w-[48vw] h-[32rem] pt-[8rem] pl-[1.6rem] pb-[4.4rem] right-[-100%] ease-in-out duration-500 tablet:hidden'
          }
        >
          <div className="flex flex-col ">
            <div className="tablet:hidden cursor-pointer" onClick={handleNav}>
              <AiOutlineClose size={30} />
            </div>
            <HeaderItem title="Homepage" to={config.routes.homepage} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem title="About Us" to={config.routes.aboutus} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem title="Contact" to={config.routes.contact} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem title="Shop" to={config.routes.shop} display="mobile" onClick={handleNav}></HeaderItem>
            <button
              className="mt-[1.6rem] flex justify-center items-center w-[13.9rem] h-[5.2rem] bg-transparent font-semibold text-[1.8rem] leading-[3rem] text-secondary border-[1.5px] border-secondary
                      hover:bg-secondary hover:text-f6e8d6  hover:duration-200;"
            >
              Cart ({totalQuantity})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
