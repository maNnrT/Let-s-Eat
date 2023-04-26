import { useRef } from 'react';
import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
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
    <>
      <Swiper slidesPerView={4} spaceBetween={32} className="mySwiper" ref={ref}>
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
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
      <div className="w-[8.8rem] flex justify-between mx-auto mt-[2.8rem]">
        <button
          className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center focus:bg-secondary focus:text-[#F8F4F1] "
          onClick={swipePrev}
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center focus:bg-secondary focus:text-[#F8F4F1]"
          onClick={swipeNext}
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
