import React from 'react';
import heroBannerHomepage from '@/assets/Image/HeroBanner_Homepage.png';
import heroBannerHomepage2 from '@/assets/Image/HeroBanner_Homepage2.png';
import heroBannerHomepage3 from '@/assets/Image/HeroBanner_Homepage3.png';
import heroBannerHomepage4 from '@/assets/Image/HeroBanner_Homepage4.png';
import leftArrow from '@/assets/svg/back_Arrow.svg';
import rightArrow from '@/assets/svg/next_Arrow.svg';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import BannerSliderItem from './BannerSliderItem/BannerSliderItem';
import { IoIosArrowForward } from 'react-icons/io';
import './BannerSlider.scss';
const slides = [
  {
    url: heroBannerHomepage,
  },
  {
    url: heroBannerHomepage2,
  },
  {
    url: heroBannerHomepage3,
  },
  {
    url: heroBannerHomepage4,
  },
];
function BannerSlide() {
  const ref = React.useRef<SwiperRef | null>(null);
  const swipeNext = () => {
    ref.current?.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current?.swiper.slidePrev();
  };

  return (
    <div className="w-full h-[90rem] relative">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        className="mySwiper1"
        ref={ref}
        style={
          {
            '--swiper-pagination-color': '#F6F5F4',
            '--swiper-pagination-bottom': '28.7rem',
            '--swiper-pagination-bullet-inactive-color': '#71655B',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '1.2rem',
            '--swiper-pagination-bullet-horizontal-gap': '0.8rem',
          } as React.CSSProperties
        }
      >
        {slides.map((slide) => (
          <SwiperSlide key={slides.indexOf(slide)}>
            <BannerSliderItem img={slide.url} />
          </SwiperSlide>
        ))}
        <div className="block absolute top-[34.8rem] left-[3.9rem] cursor-pointer z-[1]" onClick={swipePrev}>
          <img src={leftArrow} alt="" />
        </div>
        <div className="block absolute top-[34.8rem] right-[3.9rem] cursor-pointer z-[1]" onClick={swipeNext}>
          <img src={rightArrow} alt="" />
        </div>
        <div className="container flex flex-col justify-start absolute top-0 left-0 right-0 z-[1] pt-[27.4rem]">
          <h1 className="font-fahkwang font-normal text-[6.4rem] leading-[100%] w-[54.2%] m-[0rem] line-clamp-1 overflow-visible">
            Sign up & get baked!
          </h1>
          <p className=" font-light text-[1.8rem] text-ededed mt-[2.9rem] w-[54.2%] line-clamp-3">
            Let’s Eat produces a variety of hand-crafted bakery goods for private label customers, as well as a full
            line of packaged and labeled specialty products. Sign up for our newsletter and be the first to see our
            latest events, exclusive promotions, and new arrivals!
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
        </div>
      </Swiper>
    </div>
  );
}

export default BannerSlide;
