import * as React from 'react';
import heroBannerCategory from '@/assets/image/HeroBanner_MenuCombo.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getCombosSelector, getIdUserSelector, getProductsSelector, getUserCartSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
import MenuComboItem from './MenuComboItem';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { addUserCart } from '@/redux/features/cart/CartSlice';
import { Item, Product } from '@/types/types';
import Cart from '../Cart/Cart';
function MenuCombo() {
  const dispatch = useDispatch();
  const ref = React.useRef<SwiperRef | null>(null);
  const products: Product[] = useSelector(getProductsSelector);
  // console.log(products);

  const combos = products.filter((product) => {
    return product.numberPeople !== undefined;
  });
  // console.log(combos);

  const cart: Item[] = useSelector(getUserCartSelector);
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const updateCart = () => {
    if (cart.length > 0 && idUser) {
      dispatch(
        addUserCart({
          idUser,
          cart,
        }),
      );
    } else if (cart.length <= 0 && idUser) {
      dispatch(
        addUserCart({
          idUser,
          cart: [],
        }),
      );
    }
  };
  React.useEffect(() => {
    updateCart();
  }, [cart]);
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
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">MENU COMBO</p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          OUR PERFECT COMBO
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          A full meal of bread and coffee, or a relaxing afternoon with some sweets and tea. Let’s see what we have!
        </p>

        <Swiper slidesPerView={1} className="w-full" ref={ref}>
          {combos.map((combo) => (
            <SwiperSlide className="bg-fdf9f5" key={combo.id}>
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
        <button className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] left-[4rem] z-[2]" onClick={swipePrev}>
          <BsChevronLeft size={36} />
        </button>
        <button className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] right-[4rem] z-[2]" onClick={swipeNext}>
          <BsChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}

export default MenuCombo;
