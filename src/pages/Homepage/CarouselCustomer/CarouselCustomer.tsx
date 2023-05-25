import * as React from 'react';
import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
// import required modules

export default function CarouselCustomer() {
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
    <div className="w-full relative tablet:mb-[7.6rem] h-auto ">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        navigation
        slidesPerView={1}
        className="mySwiper"
        ref={ref}
        style={
          {
            '--swiper-pagination-color': '#D08C30',
            '--swiper-pagination-bullet-inactive-color': '#F3D2A5',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '1.2rem',
            '--swiper-pagination-bullet-horizontal-gap': '0.8rem',
            paddingBottom: '3.2rem',
          } as React.CSSProperties
        }
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <button className=" text-secondary z-[1] absolute tablet:top-[5rem] tablet:left-[18rem] top-[2rem] left-[8rem]" onClick={swipePrev}>
          <BsChevronLeft size={24} />
        </button>
        <button className=" text-secondary z-[1] absolute tablet:top-[5rem] tablet:right-[18rem] top-[2rem] right-[8rem] " onClick={swipeNext}>
          <BsChevronRight size={24} />
        </button>
      </Swiper>
    </div>
  );
}
