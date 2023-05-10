import config from '@/config';
import logo from '@/assets/svg/Logo.svg';
import cartImg from '@/assets/svg/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import HeaderMenu, { HeaderItem } from './HeaderMenu';
import { getIsLogin, getIdUserSelector, getTotalQuantitySelector, getUserCartSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '@/redux/features/checkLogin/CheckLoginSlice';
import * as React from 'react';
import { getCartTotal, getUserCart } from '@/redux/features/cart/CartSlice';
import { Item } from '@/types/types';

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
  return (
    <div className="flex justify-center h-[100px] w-full absolute top-0  z-[2]">
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
              <Link
                to={`${config.routes.cart}/${idUser}`}
                className="relative mr-[5px] hover:scale-150 hover:duration-500"
              >
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
      </div>
    </div>
  );
}

export default Header;
