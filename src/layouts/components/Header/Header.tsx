import config from '@/config';
import logo from '@/assets/svg/Logo.svg';
import cartImg from '@/assets/svg/cart.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import HeaderMenu, { HeaderItem } from './HeaderMenu';
import {
  getIsLogin,
  getIdUserSelector,
  getTotalQuantitySelector,
  getCartProductSelector,
  getCartComboSelector,
  getProductsSelector,
  getCombosSelector,
} from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '@/redux/features/checkLogin/CheckLoginSlice';
import * as React from 'react';
import { getCartTotal, getUserCart, updateCart } from '@/redux/features/cart/CartSlice';
import { ProductItem, ComboItem, Product, Combo } from '@/types/types';
import Search from '@/components/Search';
import SearchMobile from '@/components/SearchMobile';
import { getProducts } from '@/redux/features/products/ProductsSlice';
import useScrollDirection from '@/hooks/useScrollDirection';
import { getCombos } from '@/redux/features/combos/CombosSlice';

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
  const cartProduct: ProductItem[] = useSelector(getCartProductSelector);
  const cartCombo: ComboItem[] = useSelector(getCartComboSelector);
  const products: Product[] = useSelector(getProductsSelector);
  const combos: Combo[] = useSelector(getCombosSelector);
  // const newCombos: Combo[] = JSON.parse(JSON.stringify(combos));
  // const newCartProduct: ProductItem[] = JSON.parse(JSON.stringify(cartProduct));
  // const newCartCombo: ComboItem[] = JSON.parse(JSON.stringify(cartCombo));
  // products.forEach((products) => {
  //   newCartProduct.forEach((item) => {
  //     if (products.id === item.id) item.dishLeft = products.dishLeft;
  //   });
  //   newCartCombo.forEach((item) => {
  //     item.dishes.forEach((dish) => {
  //       if(products.id===dish.id) dish.dishLeft = products.dishLeft;
  //     });
  //   });
  //   newCombos.forEach((combo) => {
  //     combo.dishes.forEach((dish) => {
  //       if(products.id===dish.id) dish.dishLeft = products.dishLeft;
  //     });
  //   });
  // });
  React.useEffect(() => {
    if (idUser) dispatch(getUserCart(idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser]);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProduct, cartCombo]);
  // React.useEffect(() => {
  //   dispatch(updateCart({ id: idUser, cartCombo: newCartCombo, cartProduct: newCartProduct }));
  // }, [cartProduct, cartCombo, newCartProduct, newCartCombo]);
  React.useEffect(() => {
    dispatch(updateCart({ id: idUser, cartCombo, cartProduct }));
  }, [cartProduct, cartCombo]);
  React.useEffect(() => {
    dispatch(getProducts());
    dispatch(getCombos());
    document.addEventListener('click', handleClickOutside, true);
  }, []);
  const refNavMobile = React.useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (e: any) => {
    if (refNavMobile.current && !refNavMobile.current.contains(e.target)) {
      setNav(false);
    } else {
      return;
    }
  };
  return (
    <div
      className={`flex justify-center desktop:h-[7.5rem] h-[5rem] w-full fixed top-0 z-[2] duration-500 ease-in-out transition-all 
      ${scrollDirection === 'down' ? 'top-[-7.5rem]' : 'top-0'}
      ${transparent ? 'bg-transparent' : 'bg-primary'}`}
    >
      <div className="h-full container flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link to={config.routes.homepage} className="w-[10rem] desktop:w-[14.3rem] mr-[5.3rem]">
            <img src={logo} alt="logo" className="mr-[4.7rem] w-[10rem] desktop:w-[14.3rem]" />
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
        <div className="hidden desktop:flex items-center justify-end w-auto ">
          {!isLogin ? (
            <>
              <Link
                to={config.routes.login}
                className="text-secondary pr-[1rem] border-r-[1px] border-secondary lg_desktop:text-[2rem]"
              >
                Log in
              </Link>
              <Link to={config.routes.register} className="pl-[1rem] text-secondary lg_desktop:text-[2rem]">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <button className="text-secondary lg_desktop:text-[2rem] mr-[2rem] " onClick={handleLogOut}>
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
        <div className="desktop:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </div>
        <div
          className={
            nav
              ? 'fixed top-0 bg-primary w-[48vw] h-[32rem] right-0 pt-[2rem] pl-[1.6rem] pr-[1.6rem] pb-[2rem] ease-in-out duration-500 desktop:hidden'
              : 'fixed top-0 bg-primary w-[48vw] h-[32rem] pt-[2rem] pl-[1.6rem] pr-[1.6rem] pb-[2rem] right-[-100%] ease-in-out duration-500 desktop:hidden'
          }
          ref={refNavMobile}
        >
          <div className="flex flex-col">
            {/* <div className="desktop:hidden cursor-pointer self-end" onClick={handleNav}>
              <AiOutlineClose size={30} />
            </div> */}
            <SearchMobile handleNav={handleNav} />
            <HeaderItem title="Homepage" to={config.routes.homepage} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem title="About Us" to={config.routes.aboutus} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem title="Contact" to={config.routes.contact} display="mobile" onClick={handleNav}></HeaderItem>
            <HeaderItem
              title="Menu Combo"
              to={config.routes.menucombo}
              display="mobile"
              onClick={handleNav}
            ></HeaderItem>
            <HeaderItem title="Shop" to={config.routes.shop} display="mobile" onClick={handleNav}></HeaderItem>
            <Link
              to={`${config.routes.cart}`}
              className=" flex justify-center items-center w-[13.9rem] h-[5.2rem] bg-transparent font-semibold text-[1.8rem] leading-[3rem] text-secondary border-[1.5px] border-secondary
                      hover:bg-secondary hover:text-f6e8d6  hover:duration-200;"
            >
              Cart ({totalQuantity})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
