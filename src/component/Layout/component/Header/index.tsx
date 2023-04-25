import classNames from 'classnames';
import styles from './Header.module.scss';

import { useState } from 'react';
import logo from '../../../../assets/svg/Logo.svg';
import cart from '../../../../assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
const cx = classNames.bind(styles);
function Header(): JSX.Element {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = (): void => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-center h-[100px] w-full absolute top-0 left-0 right-0 z-[1]">
      <div className="h-full container flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link to="/">
            <img src={logo} alt="logo" className="mr-[65px] " />
          </Link>
          <ul className="flex items-center justify-between">
            <li className="text-secondary font-bold text-[1.8rem] leading-[3rem] mr-[32px]">
              <Link to="/">Homepage</Link>
            </li>
            <li className="font-medium text-[1.8rem] leading-[3rem] mr-[32px] tracking-[0.03em]">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="font-medium text-[1.8rem] leading-[3rem] mr-[32px] tracking-[0.03em]">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-medium text-[1.8rem] leading-[3rem] mr-[32px] tracking-[0.03em]">
              <Link to="/menucombo">Menu Combo</Link>
            </li>
            <li className="font-medium text-[1.8rem] leading-[3rem] tracking-[0.03em]">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end ">
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
