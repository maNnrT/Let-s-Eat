import * as React from 'react';
import CartItem from './CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addUserCart } from '@/redux/features/cart/CartSlice';
import { getIdUserSelector } from '@/redux/selectors';
import { Link } from 'react-router-dom';
import SmallPopup from '@/components/Popup/SmallPopup';
import config from '@/config';

type item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};
interface Props {
  cart: item[];
  totalPrice: string;
}
function CartTable({ cart, totalPrice }: Props): JSX.Element {
  const dispatch = useDispatch();
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
    setTimeout(() => {
      refDialog.current?.close();
    }, 1000);
  };
  const updateCartHandle = () => {
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
    openModal();
  };
  return (
    <div className="container mt-[6rem]">
      <SmallPopup refDialog={refDialog} title="Cart is updated!" />
      <div className="w-[82.3%] mx-auto bg-fefefd">
        <div className="w-full h-auto shadow-[0_147px_183px_rgba(0,0,0,0.07)] px-[2rem] ">
          <table className="w-full h-auto">
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
            <tbody className="w-full ">
              {cart.length !== 0 ? (
                cart.map((item) => (
                  <React.Fragment key={item.id}>
                    <CartItem
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  </React.Fragment>
                ))
              ) : (
                <tr className="h-[40rem]">
                  <td colSpan={4}>
                    <div className="flex flex-col justify-center items-center ">
                      <p className="text-secondary text-center text-[2rem] uppercase">
                        Cart is empty!
                        <br />
                        Add some products
                      </p>
                      <Link to="/shop" className="btn-secondary uppercase">
                        go to shop
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[82.3%] mx-auto h-[14.8rem] bg-fefefd ">
        <div className="px-[2rem] w-full text-secondary pt-[1.6rem] pb-[2.8rem] flex justify-end">
          <div className="pr-[8.3rem]">
            <div className="w-[39.2rem] flex justify-between">
              <p className="font-semibold text-[2.4rem] text-primary uppercase">TOTAL</p>
              <p className="font-semibold text-[2.4rem] text-primary uppercase">{totalPrice} $</p>
            </div>
            <div className="w-[39.2rem] flex justify-between mt-[1.6rem]">
              <button
                className="w-[14.5rem] h-[5.2rem] text-666565 border-[1.5px] border-666565 uppercase hover:bg-666565 hover:text-white hover:duration-200"
                onClick={updateCartHandle}
              >
                update cart
              </button>
              <Link
                to={config.routes.checkout}
                className="w-[22.7rem] h-[5.2rem] text-white btn-secondary uppercase font-normal"
                onClick={updateCartHandle}
              >
                PROCESS TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
