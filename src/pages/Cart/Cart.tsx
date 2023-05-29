import * as React from 'react';
import heroBannerCart from '@/assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProductSelector, getTotalPriceSelector, getCartComboSelector } from '@/redux/selectors';
import { ComboItem,ProductItem } from '@/types/types';
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
  }, [cartProduct,cartCombo]);
  return (
    <div className="w-full tablet:mb-[-12rem] ">
       <div
        className="w-full tablet:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang tablet:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] tablet:mb-0 first-letter:capitalize">
          food delivery
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <div className="container">
          <div className=" flex flex-col tablet:items-center tablet:pt-[6rem] pt-[2.4rem]  ">
            <div className="tablet:flex flex-col">
              <span className="text-secondary tablet:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] tablet:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal tablet:text-[1.8rem] text-[1.4rem] text-secondary inline-block tablet:block tablet:mt-[0.8rem] uppercase">
                YOUR CART
              </p>
            </div>
            <h1
              className="font-fahkwang font-normal tablet:text-[4rem] text-[2rem] 
                tablet:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
                uppercase mb-0 tablet:text-center"
            >
              OUR HONOR
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 tablet:mt-[2rem] 
                mt-[1.2rem] tablet:text-center max-w-[59.4rem] tablet:line-clamp-3 line-clamp-5"
            >
              We are honored to bring deliciousness to the table for you and your family. Don't forget to add Let's Eat
          bakery to your list of favorite stores!
            </p>
            <CartTable cartProduct={cartProduct} cartCombo={cartCombo} totalPrice={totalPrice} />
            <CartTableMobile cartProduct={cartProduct} cartCombo={cartCombo} totalPrice={totalPrice}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
