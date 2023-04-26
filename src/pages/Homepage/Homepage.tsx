import heroBannerHomepage from '../../assets/Image/HeroBanner_Homepage.png';
import leftArrow from '../../assets/svg/back_Arrow.svg';
import rightArrow from '../../assets/svg/next_Arrow.svg';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import classNames from 'classnames';
import styles from './Homepage.module.scss'
const cx = classNames.bind(styles)
function Homepage() {
  return (
    <div
      className="w-[100vw] h-[900px] bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBannerHomepage})` }}
    >
      <div className="absolute top-[37rem] left-[3.8rem] right-[3.8rem] h-[4.8rem] flex justify-between">
        <img src={leftArrow} alt="" className="hover:cursor-pointer" />
        <img src={rightArrow} alt="" className="hover:cursor-pointer" />
      </div>
      <div className="container flex flex-col justify-start ">
        <h1 className="font-fahkwang font-normal text-[6.4rem] leading-[100%] pt-[274px] w-[66.4rem] m-0">
          Sign up & get baked!
        </h1>
        <p className=" font-light text-[1.8rem]  text-ededed mt-[2.9rem] w-[66.4rem] ">
          Let’s Eat produces a variety of hand-crafted bakery goods for private label customers, as well as a full line
          of packaged and labeled specialty products. Sign up for our newsletter and be the first to see our latest
          events, exclusive promotions, and new arrivals!
        </p>
        <div className="w-[28rem] h-[5.2rem] mt-[64px] border-[2px]  border-767676  flex items-center justify-between">
          <input
            type="text"
            className="w-[23.2rem] h-full bg-transparent pl-[1.6rem] py-[1.2rem] outline-none  placeholder:text-white"
            placeholder="youremail@gmail.com"
          />
          <button className="flex items-center justify-center w-[4.8rem] h-full bg-secondary/80 rounded-e-[2px]">
            <IoIosArrowForward size={30} color="#DCDCDC" />
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center mt-[2.8rem] w-[9.6rem]">
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-71655b"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-f6f5f4"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-71655b"></div>
          <div className="w-[1.2rem] h-[1.2rem] rounded-full bg-71655b"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
