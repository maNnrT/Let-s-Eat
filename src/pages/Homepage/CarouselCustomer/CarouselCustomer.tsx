import { useRef } from 'react';
import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
// import required modules
export default function CarouselProduct() {
  const ref = useRef<any>();
  const swipeNext = () => {
    ref.current.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current.swiper.slidePrev();
  };
  return (
    <div className="w-full relative mb-[10.4rem]">
      <Swiper slidesPerView={1} className="mySwiper" ref={ref}>
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
