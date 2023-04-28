// import classNames from 'classnames/bind';
// import styles from './Header.module.scss';
// const cx = classNames.bind(styles);
import config from '../../../config';
// import { useState } from 'react';
import logo from '../../../assets/svg/Logo.svg';
import cart from '../../../assets/svg/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineMenu } from 'react-icons/ai';
import HeaderMenu, { HeaderItem } from './HeaderMenu';
import { getIsLogin } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '../../../pages/Login/LoginSlice';

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
  return (
    <div className="flex justify-center h-[100px] w-full absolute top-0  z-[1]">
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
              <div
                className='relative mr-[5px]
                      after:content-["5"]
                      after:font-normal
                      after:text-[1.2rem]
                      after:leading-[2rem]
                      after:flex
                      after:justify-center
                      after:items-center
                      after:absolute
                      after:top-[-2px]
                      after:right-[-1px]
                      after:w-4
                      after:h-4
                      after:bg-secondary
                      after:rounded-full '
              >
                <img src={cart} alt="" />
              </div>
            </>
          )}
          {/* <Link to={config.routes.login} className="btn-secondary w-[10rem] h-[3rem]">
            Sign out
          </Link> */}
        </div>
        {/* <div className="md:hidden mr-[24px]" onClick={handleNav}>
          <AiOutlineMenu size={24} color="rgba(255, 255, 255, 0.95)" />{' '}
        </div> */}
        {/* <div
          className={
            nav
              ? 'fixed flex flex-col right-0 top-0 w-[179px] h-[320px] border-r border-r-gray-900 bg-primary ease-in-out duration-500'
              : 'fixed right-[-100%]'
          }
        >
          <ul className="mt-[80px] ml-[16px]">
            <li className="font-bold text-[1.6rem] leading-[1.6rem] text-secondary">Homepage</li>
            <li className="font-medium text-[1.6rem] leading-[1.6rem] pt-4">About us</li>
            <li className="font-medium text-[1.6rem] leading-[1.6rem] pt-4">Contact</li>
            <li className="font-medium text-[1.6rem] leading-[1.6rem] pt-4">Shop</li>
          </ul>
          <button className="w-[139px] h-[52px] mt-[32px] ml-[16px] text-secondary font-semibold text-[1.8rem] leading-[3rem]  border-[1.5px] border-secondary">
            <p>Cart(5)</p>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
