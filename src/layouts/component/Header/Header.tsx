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
import { getIsLogin,getIdUser } from '../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginFalse } from '../../../redux/Slice/CheckLoginSlice';

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
  const idUser = useSelector(getIdUser);
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
              <Link to={`${config.routes.cart}`}
                className='relative mr-[5px]
                      after:content-["5"]
                      after:font-normal
                      after:text-[1.2rem]
                      after:leading-[2rem]
                      after:flex
                      after:justify-center
                      after:items-center
                      after:absolute
                      after:top-0
                      after:right-0
                      after:w-4
                      after:h-4
                      after:bg-secondary
                      after:rounded-full 
                      after:translate-x-[50%]
                      after:translate-y-[-25%]'
              >
                <img src={cart} alt="" />
              </Link>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Header;
