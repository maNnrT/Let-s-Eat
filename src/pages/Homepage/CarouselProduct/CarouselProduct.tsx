import * as React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
// import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselProduct.scss';
// import required modules
import { Product } from '@/types/types';
import { BsCart } from 'react-icons/bs';
interface Props {
  products: Product[];
}
export default function CarouselProduct({ products }: Props) {
  const ref = React.useRef<SwiperRef | null>(null);
  const swipeNext = () => {
    ref.current?.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current?.swiper.slidePrev();
  };


  return (
    <>
      <Swiper
        className="swiperProduct"
        ref={ref}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 'auto',
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                id={product.id}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </SwiperSlide>
          ))
        ) : (
          <div className="h-[41.2rem] flex flex-col items-center justify-center">
            {/* <img src={cross} alt="" className="object-cover w-[6rem]" /> */}
            <BsCart color="#D08C30" size={60} />
            <p className="text-secondary text-center text-[2rem] first-letter:capitalize mt-[2rem]">
              This special dish is out!
              <br />
              Please choose a different dish
            </p>
          </div>
        )}
      </Swiper>
      <div className="w-[8.8rem]  justify-between mx-auto mt-[2.8rem] desktop:flex hidden">
        <button className="paginationBtn" onClick={swipePrev}>
          <BsChevronLeft size={20} />
        </button>
        <button className="paginationBtn" onClick={swipeNext}>
          <BsChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
