import * as React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIdUserSelector, getIsLogin, getProductByIdSelector, getUserCartSelector } from '@/redux/selectors';
import { getProductById } from '@/redux/features/products/ProductsSlice';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { addToCart, addUserCart } from '@/redux/features/cart/CartSlice';
import SmallPopup from '@/components/Popup/SmallPopup';
import { Item, Product } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import check from '@/assets/svg/check_formCheckOut.svg';
import { setOpenModalFalse } from '@/redux/features/modalSlice/modalSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface Props {
  id: number | undefined;
}
function ProductDetail({ id }: Props): JSX.Element|null {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const isLogin: boolean = useSelector(getIsLogin);
  const cart: Item[] = useSelector(getUserCartSelector);

  const productById: Product = useSelector(getProductByIdSelector);
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
    setTimeout(() => {
      refDialog.current?.close();
    }, 1000);
  };
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
  const handleAddToCart = () => {
    if (isLogin) {
      dispatch(
        addToCart({
          id: productById.id,
          img: productById.img,
          name: productById.name,
          price: productById.price,
          quantity: numberInput,
        }),
      );
      openModal();
    } else {
      navigate(config.routes.login);
    }
  };
  React.useEffect(() => {
    updateCart();
  }, [cart]);
  const [numberInput, setNumberInput] = React.useState<number>(1);
  const decreaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 2) return pre - 1;
      else return 1;
    });
  };
  const increaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 1) return pre + 1;
      else return 1;
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
  const el = document.getElementById('portal')
  if (el)
    return ReactDOM.createPortal(
      <div className="bg-[rgba(0,0,0,0.3)] fixed h-full w-full z-[99999] top-0 left-0 right-0 bottom-0">
        <SmallPopup refDialog={refDialog} img={check} title="Add to shopping cart!" />
        <div className="container grid grid-cols-2 gap-x-[3.2rem] h-fit min-w-[65.6rem] m-auto absolute right-0 left-0 top-[10rem] bg-fdf9f5">
          <div className="w-full h-full relative">
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
                  '--swiper-pagination-bullet-size': '1.2rem',
                  '--swiper-pagination-bullet-horizontal-gap': '0.8rem',
                } as React.CSSProperties
              }
            >
              {productById.detailImg &&
                JSON.parse(productById.detailImg).map((img: string) => (
                  <SwiperSlide key={JSON.parse(productById.detailImg ? productById.detailImg : '').indexOf(img)}>
                    <div className="w-full h-full">
                      <LazyLoadImage src={img} alt="" className="w-full h-full max-h-[55.7rem] object-cover" />
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
          <div>
            <div className="mt-[2rem]">
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
            <div className="mt-[5.7rem] h-[2.8rem] flex justify-start ">
              <button className="w-[2.8rem] h-full bg-e9e9e9 text-[1.6rem] text-aaa9a9" onClick={decreaseNumber}>
                -
              </button>
              <input
                type="number"
                className="h-full outline-none w-[5.4rem] text-primary text-center"
                min="1"
                value={numberInput}
                readOnly
              />
              <button className="w-[2.8rem] h-full bg-e9e9e9 text-[1.2rem] text-aaa9a9" onClick={increaseNumber}>
                +
              </button>
            </div>
            <button className="mt-[2.4rem] btn-secondary mb-[2rem] uppercase" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <span
              className="text-666565 text-[6rem] absolute top-[3.2rem] right-[3.2rem] leading-[2rem] cursor-pointer"
              onClick={() => dispatch(setOpenModalFalse())}
            >
              &times;
            </span>
          </div>
        </div>
      </div>,
      el,
    );
  else{
    return null
  }
}

export default ProductDetail;
