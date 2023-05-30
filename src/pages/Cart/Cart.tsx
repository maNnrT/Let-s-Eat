import * as React from 'react';
import heroBannerCart from '@/assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProductSelector, getTotalPriceSelector, getCartComboSelector } from '@/redux/selectors';
import { ComboItem, ProductItem } from '@/types/types';
import CartTable from './CartTable';
import { getCartTotal } from '@/redux/features/cart/CartSlice';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import CartTableMobile from './CartTableMobile/CartTableMobile';
function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const cartProduct: ProductItem[] = useSelector(getCartProductSelector);
  const cartCombo: ComboItem[] = useSelector(getCartComboSelector);
  const totalPrice: string = useSelector(getTotalPriceSelector);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProduct, cartCombo]);
  return (
    <div className="w-full desktop:mb-[-12rem] ">
      <div
        className="w-full desktop:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang desktop:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] desktop:mb-0 first-letter:capitalize">
          food delivery
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <div className="container">
          <div className=" flex flex-col desktop:items-center desktop:pt-[6rem] pt-[2.4rem]  ">
            <div className="desktop:flex flex-col">
              <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                YOUR CART
              </p>
            </div>
            <h1
              className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] 
                desktop:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
                uppercase mb-0 desktop:text-center"
            >
              OUR HONOR
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] 
                mt-[1.2rem] desktop:text-center max-w-[59.4rem] desktop:line-clamp-3 line-clamp-5"
            >
              We are honored to bring deliciousness to the table for you and your family. Don't forget to add Let's Eat
              bakery to your list of favorite stores!
            </p>
            <CartTable cartProduct={cartProduct} cartCombo={cartCombo} totalPrice={totalPrice} />
            <CartTableMobile cartProduct={cartProduct} cartCombo={cartCombo} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
