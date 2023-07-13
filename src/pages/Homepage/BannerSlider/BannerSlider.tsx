import React from 'react';
import heroBannerHomepage from '@/assets/image/HeroBanner_Homepage.png';
import heroBannerHomepage2 from '@/assets/image/HeroBanner_Homepage2.png';
import heroBannerHomepage3 from '@/assets/image/HeroBanner_Homepage3.png';
import heroBannerHomepage4 from '@/assets/image/HeroBanner_Homepage4.png';
import leftArrow from '@/assets/svg/back_Arrow.svg';
import rightArrow from '@/assets/svg/next_Arrow.svg';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css/effect-fade';

import BannerSliderItem from './BannerSliderItem';
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

  const pagination = {
    clickable: true,
  };
  return (
    <div className="w-full desktop:h-[90rem] h-[32rem] relative">
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        className="mySwiper1"
        autoplay={{
          disableOnInteraction: false,
        }}
        speed={2000}
        effect={'fade'}
        loop={true}
        fadeEffect={{
          crossFade: true,
        }}
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
        <div
          className="hidden desktop:block absolute top-[34.8rem] left-[3.9rem] cursor-pointer z-[1]"
          onClick={swipePrev}
        >
          <img src={leftArrow} alt="" />
        </div>
        <div
          className="hidden desktop:block absolute top-[34.8rem] right-[3.9rem] cursor-pointer z-[1]"
          onClick={swipeNext}
        >
          <img src={rightArrow} alt="" />
        </div>
        <div className="container flex flex-col justify-start absolute top-0 left-0 right-0 z-[1] desktop:pt-[27.4rem] pt-[11.2rem]">
          <p className="font-fahkwang font-normal desktop:text-[6.4rem] text-[2.6rem] leading-[110%] lg_desktop:w-[54.2%] m-[0rem] truncate w-full">
            Sign up & get baked!
          </p>
          <p className="w-[54.2%] mt-[2.9rem] font-light text-[1.8rem] text-ededed line-clamp-3 desktop:webkit-box hidden ">
            Let’s Eat produces a variety of hand-crafted bakery goods for private label customers, as well as a full
            line of packaged and labeled specialty products. Sign up for our newsletter and be the first to see our
            latest events, exclusive promotions, and new arrivals!
          </p>
          <p className="desktop:hidden font-light text-[1.6rem] leading-[140%] text-ededed mt-[2.9rem] webkit-box line-clamp-2 w-full">
            Sign up for our newsletter and be the first to see our latest events, exclusive promotions, and new
            arrivals!
          </p>
          <div className="w-full desktop:w-[28rem] h-[5.2rem] desktop:mt-[6.4rem] mt-[1.6rem] border-[2px] border-767676  flex items-center justify-between">
            <input
              type="text"
              className="w-[23.2rem] h-full bg-transparent pl-[1.6rem] py-[1.2rem] outline-none  placeholder:text-white flex-1"
              placeholder="youremail@gmail.com"
            />
            <button className="w-[5.2rem] h-full bg-secondary/80 btn-secondary">
              <IoIosArrowForward size={30} color="#DCDCDC" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerSlide;
