import * as React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin, getProductByIdSelector } from '@/redux/selectors';
import { getProductById } from '@/redux/features/products/ProductsSlice';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { addToCartProduct } from '@/redux/features/cart/CartSlice';
// import SmallPopup from '@/components/Popup/SmallPopup';
import { Product } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { motion } from 'framer-motion';
import { setOpenAddToCart, setOpenProductDetailFalse } from '@/redux/features/modalSlice/modalSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface Props {
  id: number | undefined;
}
function ProductDetail({ id }: Props): JSX.Element | null {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin: boolean = useSelector(getIsLogin);
  const productById: Product = useSelector(getProductByIdSelector);
  // console.log('check:' ,productById);

  const refBtn = React.useRef<HTMLButtonElement>(null);
  const refBtnIncrease = React.useRef<HTMLButtonElement>(null);
  const refBtnDecrease = React.useRef<HTMLButtonElement>(null);
  const openModal = () => {
    dispatch(setOpenAddToCart(true));
    setTimeout(() => {
      dispatch(setOpenAddToCart(false));
    }, 1000);
  };

  // if (productById.dishLeft === 0) {
  //   if (refBtn.current !== null) refBtn.current.disabled = true;
  //   if (refBtnIncrease.current !== null) refBtnIncrease.current.disabled = true;
  //   if (refBtnDecrease.current !== null) refBtnDecrease.current.disabled = true;
  // }
  const handleAddToCart = () => {
    if (isLogin) {
      // if (numberInput > 0) {
      dispatch(
        addToCartProduct({
          // id: productById.id,
          // img: productById.img,
          // name: productById.name,
          // price: productById.price,
          // quantity: numberInput,
          id: productById.id,
          type: productById.type,
          dish: productById.dish,
          img: productById.img,
          name: productById.name,
          description: productById.description,
          ingredient: productById.ingredient,
          detail: productById.detail,
          detailImg: productById.detailImg,
          price: productById.price,
          dishLeft: productById.dishLeft,
          quantity: numberInput,
        }),
      );
      openModal();
      // } else {
      //   openModal2();
      // }
    } else {
      navigate(config.routes.login);
    }
  };
  const [numberInput, setNumberInput] = React.useState<number>(1);
  // const decreaseNumber = () => {
  //   setNumberInput((pre: number): number => {
  //     if (pre >= 1 && pre <= productById.dishLeft) return pre - 1;
  //     else return 0;
  //   });
  // };
  // const increaseNumber = () => {
  //   setNumberInput((pre: number): number => {
  //     if (pre >= 0 && pre < productById.dishLeft) return pre + 1;
  //     else return productById.dishLeft;
  //   });
  // };
  const decreaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 2 && pre <= 99) return pre - 1;
      else return 1;
    });
  };
  const increaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 1 && pre < 99) return pre + 1;
      else return pre;
    });
  };
  const ref = React.useRef<SwiperRef | null>(null);
  const swipeNext = () => {
    ref.current?.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current?.swiper.slidePrev();
  };
  React.useEffect(() => {
    if (id) dispatch(getProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pagination = {
    clickable: true,
  };
  const el = document.getElementById('portal');
  if (el)
    return ReactDOM.createPortal(
      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
          }}
          className="bg-[rgba(0,0,0,0.3)] fixed h-full w-full z-[99999] top-0 left-0 right-0 bottom-0  "
        >
          <motion.div
            initial={{
              scale: 0.5,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0.5,
              transition: {
                duration: 0.3,
              },
            }}
            className="tablet:container grid tablet:grid-cols-2 grid-cols-1 gap-x-[3.2rem] gap-y-[2.4rem] tablet:h-fit h-[100vh] 
          tablet:min-w-[65.6rem] m-auto absolute right-0 left-0 tablet:top-[10rem] bg-fdf9f5 overflow-y-auto"
          >
            <div className="tablet:w-full tablet:h-full h-[40rem] relative ">
              <Swiper
                pagination={pagination}
                modules={[Pagination]}
                slidesPerView={1}
                className="h-full"
                ref={ref}
                style={
                  {
                    '--swiper-pagination-color': '#F6F5F4',
                    '--swiper-pagination-bottom': '3.2rem',
                    '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
                    '--swiper-pagination-bullet-inactive-opacity': '0.3',
                  } as React.CSSProperties
                }
              >
                {productById.detailImg &&
                  JSON.parse(productById.detailImg).map((img: string) => (
                    <SwiperSlide key={JSON.parse(productById.detailImg ? productById.detailImg : '').indexOf(img)}>
                      <div className="w-full h-full">
                        <LazyLoadImage src={img} alt="" className="w-full h-full tablet:max-h-[55.7rem] object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                <button
                  className="w-auto h-auto text-white flex justify-center items-center absolute top-[50%] left-[4.3%] z-[1]"
                  onClick={swipePrev}
                >
                  <BsChevronLeft size={30} />
                </button>
                <button
                  className="w-auto h-auto text-white flex justify-center items-center absolute top-[50%] right-[4.3%] z-[1]"
                  onClick={swipeNext}
                >
                  <BsChevronRight size={30} />
                </button>
              </Swiper>
            </div>
            <div className="container">
              <div className=" tablet:mt-[2rem]">
                <span className="text-secondary mr-[0.8rem] tablet:text-[3.2rem] text-[1.6rem] leading-[0rem] ">—</span>
                <p className="font-normal tablet:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                  Dish detail
                </p>
              </div>
              <h2 className="font-fahkwang font-normal tablet:text-[4.4rem] text-[2rem] leading-[1] tablet:mt-[3.6rem] mt-[2rem] text-151618 uppercase">
                {productById.name}
              </h2>
              <p className="tablet:mt-[2.4rem] mt-[2rem] font-fahkwang font-normal tablet:text-[3.2rem] text-[1.8rem] leading-[100%] text-2d2d2d">
                ${productById.price}
              </p>
              {/* <p className="mt-[2.4rem] font-fahkwang font-normal text-[1.8rem] leading-[100%] text-2d2d2d">
                Remaining: {productById.dishLeft}
              </p> */}
              <p className="font-light text-[1.6rem] text-666565 tablet:mt-[2.8rem]  mt-[1.2rem]">
                {productById.detail}
              </p>
              <div className="tablet:mt-[5.7rem] mt-[2.4rem] h-[2.8rem] flex justify-start ">
                <button
                  className="w-[2.8rem] h-full bg-e9e9e9 text-[1.6rem] text-aaa9a9 cursor-pointer disabled:cursor-default disabled:opacity-50"
                  onClick={decreaseNumber}
                  ref={refBtnDecrease}
                >
                  -
                </button>
                <input
                  type="text"
                  className="h-full outline-none w-[5.4rem] text-primary text-center"
                  min="1"
                  value={numberInput}
                  readOnly
                />
                <button
                  className="w-[2.8rem] h-full bg-e9e9e9 text-[1.2rem] text-aaa9a9 cursor-pointer disabled:cursor-default disabled:opacity-50"
                  onClick={increaseNumber}
                  ref={refBtnIncrease}
                >
                  +
                </button>
              </div>
              <button className="mt-[2.4rem] btn-secondary mb-[2rem] uppercase " onClick={handleAddToCart} ref={refBtn}>
                ADD TO CART
              </button>
              <span
                className="tablet:text-666565 text-white text-[6rem] absolute top-[2rem] right-[2rem] leading-[2rem] cursor-pointer z-10 font-light"
                onClick={() => {
                  dispatch(setOpenProductDetailFalse());
                }}
              >
                &times;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>,
      el,
    );
  else {
    return null;
  }
}

export default ProductDetail;
