import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdSelector } from '../../../../redux/selectors';
import { getProductById } from '../../../../redux/Slice/ProductsSlice';
// import CarouselItem from './CarouselItem';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './FreshBakedItemDetail.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

interface Props {
  id: number | undefined;
  onClose: () => void;
}
function FreshBakedItemDetail({ id, onClose }: Props) {
  const dispatch = useDispatch();
  const productById = useSelector(getProductByIdSelector);
  console.log('check:', typeof productById.detailImg);
  let arrImg: string[];
  if (productById.detailImg) {
    arrImg = JSON.parse(productById.detailImg);
    arrImg.map((img: string) => {
      console.log(typeof img);

      console.log(arrImg.indexOf(img));
    });
  }

  const ref = React.useRef<any>();
  const swipeNext = () => {
    ref.current.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current.swiper.slidePrev();
  };
  React.useEffect(() => {
    if (id) dispatch(getProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[rgba(0,0,0,0.5)] absolute h-full w-full z-10">
      <div className="container grid grid-cols-2 gap-x-[3.2rem] h-[65.6rem] min-w-[65.6rem] m-auto absolute right-0 left-0 top-[36.1rem] bg-fdf9f5">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          className="mySwiper"
          ref={ref}
          style={{
            '--swiper-pagination-color': '#D08C30',
            '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
            '--swiper-pagination-bullet-inactive-opacity': '0.3',
            '--swiper-pagination-bullet-size': '1.2rem',
            '--swiper-pagination-bullet-horizontal-gap': '0.8rem',
          }}
        >
          {productById.detailImg &&
            JSON.parse(productById.detailImg).map((img: string) => (
              <SwiperSlide key={JSON.parse(productById.detailImg).indexOf(img)}>
                <div className="w-full relative h-full">
                  <img src={img} alt="" className="w-full h-full" />
                  <button
                    className="w-auto h-auto text-white flex justify-center items-center absolute top-[31rem] left-[2.6rem]"
                    onClick={swipePrev}
                  >
                    <BsChevronLeft size={30} />
                  </button>
                  <button
                    className="w-auto h-auto text-white flex justify-center items-center absolute top-[31rem] right-[2.6rem]"
                    onClick={swipeNext}
                  >
                    <BsChevronRight size={30} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide className="text-secondary">Slide 1</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 2</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 3</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 4</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 5</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 6</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 7</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 8</SwiperSlide>
          <SwiperSlide className="text-secondary">Slide 9</SwiperSlide>
        </Swiper> */}
        <div>
          <div className="mt-[9rem]">
            <span className="text-secondary mr-[0.8rem] text-[3.2rem] ">—</span>
            <p className="font-normal text-[1.8rem] text-secondary inline-block uppercase">Dish detail</p>
          </div>
          <h2 className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 uppercase">
            {productById.name}
          </h2>
          <p className="mt-[2.4rem] font-fahkwang font-normal text-[3.2rem] leading-[100%] text-2d2d2d">
            ${productById.price}
          </p>
          <p className="font-light text-[1.6rem] text-666565 mt-[2.8rem]">{productById.detail}</p>
          <button className="mt-[2.4rem] btn-secondary">ADD TO CART</button>
          <span
            className="text-666565 text-[6rem] absolute top-[3.2rem] right-[3.2rem] leading-[2rem] cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default FreshBakedItemDetail;
