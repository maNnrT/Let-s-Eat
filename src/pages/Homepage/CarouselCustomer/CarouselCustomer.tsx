import { CSSProperties, useRef } from 'react';
import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper';
// import required modules
export default function CarouselCustomer() {
  const ref = useRef<any>();
  const swipeNext = () => {
    ref.current.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current.swiper.slidePrev();
  };
  return (
    <div className="w-full relative mb-[7.6rem] h-auto ">
      <Swiper
        pagination={true}
        modules={[Pagination]}
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
          } as CSSProperties
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
      </Swiper>
      <button className=" text-secondary z-[1] absolute top-[5rem] left-[18rem]" onClick={swipePrev}>
        <BsChevronLeft size={24} />
      </button>
      <button className=" text-secondary z-[1] absolute top-[5rem] right-[18rem]" onClick={swipeNext}>
        <BsChevronRight size={24} />
      </button>
    </div>
  );
}
