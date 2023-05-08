import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Slider.module.scss';

import heroBannerHomepage from '@/assets/Image/HeroBanner_Homepage.png';
import heroBannerHomepage2 from '@/assets/Image/HeroBanner_Homepage2.png';
import heroBannerHomepage3 from '@/assets/Image/HeroBanner_Homepage3.png';
import heroBannerHomepage4 from '@/assets/Image/HeroBanner_Homepage4.png';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import leftArrow from '@/assets/svg/back_Arrow.svg';
import rightArrow from '@/assets/svg/next_Arrow.svg';
import { RxDotFilled } from 'react-icons/rx';
const cx = classNames.bind(styles);
//w-[1.2rem] h-[1.2rem] rounded-full bg-71655b
function Slider() {
  const slides = [
    {
      index: 0,
      url: heroBannerHomepage,
    },
    {
      index: 1,
      url: heroBannerHomepage2,
    },
    {
      index: 2,
      url: heroBannerHomepage3,
    },
    {
      index: 3,
      url: heroBannerHomepage4,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="w-full h-[90rem] bg-center bg-cover relative duration-500"
    >
      <div className="block absolute top-[34.8rem] left-[3.9rem] cursor-pointer">
        <img src={leftArrow} alt="" onClick={prevSlide} />
      </div>
      <div className="block absolute top-[34.8rem] right-[3.9rem] cursor-pointer">
        <img src={rightArrow} alt="" onClick={nextSlide} />
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
        <div className="flex justify-between items-center mt-[2.8rem] w-[9.6rem]">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? 'w-[1.2rem] h-[1.2rem] rounded-full bg-f6f5f4'
                    : 'w-[1.2rem] h-[1.2rem] rounded-full bg-71655b'
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
