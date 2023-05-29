import { ComboItem, ProductItem } from '@/types/types';
import React from 'react';
import { BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CartComboItem, CartProductItem } from '../CartTableMobile/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getIdUserSelector } from '@/redux/selectors';
import { updateCart } from '@/redux/features/cart/CartSlice';
import config from '@/config';
import { setOpenCartUpdateFail, setOpenCartUpdateSuccess } from '@/redux/features/modalSlice/modalSlice';

interface Props {
  cartProduct: ProductItem[];
  cartCombo: ComboItem[];
  totalPrice: string;
}
function CartTableMobile({ cartProduct, cartCombo, totalPrice }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = useSelector(getIdUserSelector);
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
    <div className="container my-[2.4rem] h-fit block tablet:hidden border-t-[0.15rem] border-d9d9d9 pt-[0.8rem] ">
      {/* <SmallPopup refDialog={refDialog} img={check} title="Cart is updated!" />
      <SmallPopup refDialog={refDialog2} img={cross} title="Cart is empty!" /> */}
      {cartProduct.length !== 0 &&
        cartProduct.map((item) => (
          <React.Fragment key={item.id}>
            <CartProductItem id={item.id} img={item.img} name={item.name} price={item.price} quantity={item.quantity} />
          </React.Fragment>
        ))}
      {cartCombo.length !== 0 &&
        cartCombo.map((item) => (
          <React.Fragment key={item.id}>
            <CartComboItem id={item.id} img={item.img} name={item.name} price={item.price} quantity={item.quantity} />
          </React.Fragment>
        ))}
      {cartCombo.length === 0 && cartProduct.length === 0 && (
        <div className="flex flex-col justify-center items-center my-[2rem] border-d9d9d9 border-b-[0.15rem] pb-[2rem]">
          <BsCart color="#D08C30" size={45} />
          <p className="text-secondary text-center text-[1.6rem] first-letter:capitalize mt-[2rem] ">
            Cart is empty!
            <br />
            Add some products
          </p>
        </div>
      )}
      <div className="fixed bottom-0 bg-fdf9f5 right-0 left-0  h-[5rem] shadow-[0_2px_12px_rgba(0,0,0,0.12)] flex items-center justify-end">
        <p className="font-semibold tablet:text-[2.4rem] text-[1.6rem] text-primary uppercase mr-[1rem]">
          TOTAL: {totalPrice} $
        </p>
        <button
          className="w-[10rem] h-[3rem] text-666565 text-[1.2rem] border-[1.5px] 
                border-666565 uppercase hover:bg-666565 hover:text-white hover:duration-200 mr-[1rem]"
          onClick={updateCartBtnHandle}
        >
          update cart
        </button>
        <button
          className="w-[10rem] h-[3rem] text-white text-[1.2rem] btn-secondary uppercase font-normal "
          onClick={processToCheckOutBtnHandle}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartTableMobile;
