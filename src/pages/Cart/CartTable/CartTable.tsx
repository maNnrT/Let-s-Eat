import * as React from 'react';
import { CartProductItem, CartComboItem } from './CartItem/';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { updateCart } from '@/redux/features/cart/CartSlice';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { ComboItem, ProductItem } from '@/types/types';
import { getIdUserSelector } from '@/redux/selectors';
import { BsCart } from 'react-icons/bs';
import { setOpenCartUpdateFail, setOpenCartUpdateSuccess } from '@/redux/features/modalSlice/modalSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';
interface Props {
  cartProduct: ProductItem[];
  cartCombo: ComboItem[];
  totalPrice: string;
}
function CartTable({ cartProduct, cartCombo, totalPrice }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const refPara = React.useRef<HTMLParagraphElement>(null);
  const idUser = useAppSelector(getIdUserSelector);
  const [parent] = useAutoAnimate(/* optional config */);
  // console.log(cartProduct);
  // console.log(cartCombo);
  const openModal = () => {
    dispatch(setOpenCartUpdateSuccess(true));
    setTimeout(() => {
      dispatch(setOpenCartUpdateSuccess(false));
    }, 1000);
  };
  const openModal2 = () => {
    dispatch(setOpenCartUpdateFail(true));
    setTimeout(() => {
      dispatch(setOpenCartUpdateFail(false));
    }, 1000);
  };

  const updateCartBtnHandle = () => {
    dispatch(updateCart({ id: idUser, cartProduct, cartCombo }));
    openModal();
  };
  // const isAvailable= cartProduct.every(item=>{
  //   return item.quantity <=item.dishLeft
  // })
  // console.log(isAvailable);

  const processToCheckOutBtnHandle = () => {
    if (cartProduct.length + cartCombo.length > 0) {
      // if (isAvailable){
      dispatch(updateCart({ id: idUser, cartProduct, cartCombo }));
      navigate(config.routes.cart + config.routes.checkout);
      // }else {
      //   const res = cartProduct.filter((item) => {
      //     return item.quantity > item.dishLeft;
      //   });
      //   if (refPara.current !== null)
      //     refPara.current.innerHTML = `You take too many of ${res.map(
      //       (item) => item.name +','
      //     )}!<br /> please adjust the number of these products or remove them from cart `;
      // }
    } else if (cartProduct.length + cartCombo.length <= 0) {
      openModal2();
    }
  };
  return (
    <div className="container mt-[6rem] hidden desktop:block mb-[6rem]">
      <div className="w-[82.3%] mx-auto bg-fefefd">
        <div className="w-full h-auto shadow-[0_147px_183px_rgba(0,0,0,0.07)] px-[2rem] ">
          <table className="w-full h-auto border-b-[0.15rem] border-d9d9d9">
            <thead className="w-full">
              <tr className=" h-[6rem] border-b-[0.15rem] border-d9d9d9">
                <th className="w-[40%]">
                  <div className="flex justify-center items-center ">
                    <p className="font-medium text-[1.8rem] text-primary ">Product</p>
                  </div>
                </th>
                <th className="w-[6.4%]">
                  <div className="flex justify-end items-center ">
                    <p className="font-medium text-[1.8rem] text-primary ">Price</p>
                  </div>
                </th>
                <th className="w-[36%]">
                  <div className="flex justify-center items-center ">
                    <p className="font-medium text-[1.8rem] text-primary ">Quantity</p>
                  </div>
                </th>
                <th>
                  <div className="flex justify-end items-center pr-[8.3rem]">
                    <p className="font-medium text-[1.8rem] text-primary ">Subtotal</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="w-full h-fit min-h-[40rem]" ref={parent}>
              {cartProduct.length !== 0 &&
                cartProduct.map((item) => (
                  <React.Fragment key={item.id}>
                    <CartProductItem
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </React.Fragment>
                ))}
              {cartCombo.length !== 0 &&
                cartCombo.map((item) => (
                  <React.Fragment key={item.id}>
                    <CartComboItem
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </React.Fragment>
                ))}
              {cartCombo.length === 0 && cartProduct.length === 0 && (
                <tr className="h-[40rem]">
                  <td colSpan={4}>
                    <div className="flex flex-col justify-center items-center ">
                      <BsCart color="#D08C30" size={60} />
                      <p className="text-secondary text-center text-[2rem] first-letter:capitalize mt-[2rem]">
                        Cart is empty!
                        <br />
                        Add some products
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[82.3%] mx-auto h-[14.8rem] bg-fefefd ">
        <div className="px-[2rem] w-full text-secondary pt-[1.6rem] pb-[2.8rem] flex justify-between items-center">
          <div className="pl-[8.3rem]">
            <p className=" text-secondary text-[1.6rem]" ref={refPara}></p>
          </div>
          <div className="pr-[8.3rem]">
            <div className="w-[39.2rem] flex justify-between">
              <p className="font-semibold text-[2.4rem] text-primary uppercase">TOTAL</p>
              <p className="font-semibold text-[2.4rem] text-primary uppercase">{totalPrice} $</p>
            </div>
            <div className="w-[39.2rem] flex justify-between mt-[1.6rem]">
              <button
                className="w-[14.5rem] h-[5.2rem] text-666565 border-[1.5px] border-666565 uppercase hover:bg-666565 hover:text-white hover:duration-200"
                onClick={updateCartBtnHandle}
              >
                update cart
              </button>

              <button
                className="w-[22.7rem] h-[5.2rem] text-white btn-secondary uppercase font-normal"
                onClick={processToCheckOutBtnHandle}
              >
                PROCESS TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
