import * as React from 'react';
import heroBannerCategory from '@/assets/image/HeroBanner_MenuCombo.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getCombosSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
import MenuComboItem from './MenuComboItem';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { Combo } from '@/types/types';
import { useParams } from 'react-router-dom';
function MenuCombo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ref = React.useRef<SwiperRef | null>(null);
  const combos: Combo[] = useSelector(getCombosSelector);
  const swipeNext = () => {
    ref.current?.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current?.swiper.slidePrev();
  };

  React.useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full tablet:mb-[-12rem] h-full">
      <div
        className="w-full tablet:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang tablet:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] tablet:mb-0">
          Menu combo
        </p>
        <Breadcrumbs />
      </div>
      <div className=" w-full h-full flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <div className="container">
          <div className=" flex flex-col tablet:items-center tablet:pt-[6rem] pt-[2.4rem]  ">
            <div className="tablet:flex flex-col">
              <span className="text-secondary tablet:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] tablet:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal tablet:text-[1.8rem] text-[1.4rem] text-secondary inline-block tablet:block tablet:mt-[0.8rem] uppercase">
                our menu
              </p>
            </div>
            <h1
              className="font-fahkwang font-normal tablet:text-[4rem] text-[2rem] 
              tablet:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
              uppercase mb-0 tablet:text-center"
            >
              OUR PERFECT COMBO
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 tablet:mt-[2rem] 
              mt-[1.2rem] tablet:text-center max-w-[59.4rem] tablet:line-clamp-3 line-clamp-5"
            >
              A full meal of bread and coffee, or a relaxing afternoon with some sweets and tea. Let’s see what we have!
            </p>
            <p className="text-secondary mt-[1.2rem] tablet:hidden">Swipe left or right to see more combo</p>
            <Swiper slidesPerView={1} className="w-full h-fit" ref={ref} initialSlide={id ? Number(id) - 1 : 0}>
              {combos.map((combo) => (
                <SwiperSlide className="bg-fdf9f5" key={combos.indexOf(combo)}>
                  <MenuComboItem
                    id={combo.id}
                    name={combo.name}
                    img={combo.img}
                    numberPeople={combo.numberPeople}
                    dishes={combo.dishes}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] left-[4rem] z-[2] hidden tablet:block"
              onClick={swipePrev}
            >
              <BsChevronLeft size={36} />
            </button>
            <button
              className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] right-[4rem] z-[2] hidden tablet:block"
              onClick={swipeNext}
            >
              <BsChevronRight size={36} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCombo;
