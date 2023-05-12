import * as React from 'react';
import heroBannerCart from '@/assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPriceSelector, getUserCartSelector } from '@/redux/selectors';
import { Item } from '@/types/types';
import CartTable from './CartTable';
import { getCartTotal } from '@/redux/features/cart/CartSlice';
import { useParams } from 'react-router-dom';

function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const { idUser } = useParams();
  
  
  const cart: Item[] = useSelector(getUserCartSelector);
  const totalPrice: string = useSelector(getTotalPriceSelector);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Food delivery</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Cart</p>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] pb-[12rem] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">YOUR CART</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          OUR HONOR
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          We are honored to bring deliciousness to the table for you and your family. Don't forget to add Let's Eat
          bakery to your list of favorite stores!
        </p>
        <CartTable cart={cart} totalPrice={totalPrice} idUser={Number(idUser)} />
      </div>
    </div>
  );
}

export default Cart;
