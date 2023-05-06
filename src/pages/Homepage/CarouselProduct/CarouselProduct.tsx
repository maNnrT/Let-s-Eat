import * as React from 'react';
import CarouselItem from './CarouselItem';
// import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
// import required modules
type product = {
  id: number;
  type: string;
  img: string;
  name: string;
  description: string;
  price: string;
};
interface Props {
  products: product[];
}
export default function CarouselProduct({ products }: Props) {
  const ref = React.useRef<any>();
  const swipeNext = () => {
    ref.current.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current.swiper.slidePrev();
  };
  // console.log('check:', products);

  return (
    <>
      <Swiper
        className="mySwiper"
        ref={ref}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CarouselItem
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </SwiperSlide>
        ))}
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
