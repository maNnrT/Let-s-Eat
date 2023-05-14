import * as React from 'react';
import CarouselItem from './CarouselItem';
// import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Product } from '@/types/types';
import ProductDetail from '@/pages/Shop/ProductDetail/ProductDetail';
interface Props {
  products: Product[];
}
export default function CarouselProduct({ products }: Props) {
  const [openProductDetail, setOpenProductDetail] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<number | undefined>();
  const handleOpenProductDetail = (id: number | undefined): void => {
    setSelectedItem(id);
    setOpenProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setOpenProductDetail(false);
  };
  const ref = React.useRef<SwiperRef | null>(null);
  const swipeNext = () => {
    ref.current?.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current?.swiper.slidePrev();
  };
  return (
    <>
      {openProductDetail && <ProductDetail id={selectedItem} onClose={handleCloseProductDetail} />}
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
              onOpen={handleOpenProductDetail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-[8.8rem] flex justify-between mx-auto mt-[2.8rem]">
        <button
          className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center focus:bg-secondary focus:text-[#F8F4F1] focus:duration-200"
          onClick={swipePrev}
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center focus:bg-secondary focus:text-[#F8F4F1] focus:duration-200"
          onClick={swipeNext}
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
