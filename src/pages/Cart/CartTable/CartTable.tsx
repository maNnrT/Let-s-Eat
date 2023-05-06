import * as React from 'react';
import CartItem from './CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addUserCart } from '../../../redux/feature/CartSlice';
import { getIdUserSelector } from '../../../redux/selectors';

type item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};
interface Props {
  cart: item[];
  totalPrice: number;
}
function CartTable({ cart, totalPrice }: Props): JSX.Element {
  // console.log(cart.length);

  const dispatch = useDispatch();
  const idUser = useSelector(getIdUserSelector);
  // console.log(cart);
  // console.log('totalprice', totalPrice);
  const updateCartHandle = () => {
    if (cart.length > 0) {
      dispatch(
        addUserCart({
          idUser,
          cart,
        }),
      );
    }
    else{
      dispatch(
        addUserCart({
          idUser,
          cart:[],
        }),
      );
    }
  };
  // const [subTotalArr, setSubTotalArr] = React.useState<number[]>(
  //   cart.map((item) => (Number(item?.price) || 0) * Number(item.quantity)),
  // );
  // const [quantityArr, setQuantityArr] = React.useState<number[]>(cart.map((item) => item.quantity));
  // console.log(subTotalArr);
  // const decreaseNumber = (id: number) => {
  //   setQuantityArr((pre) => {
  //     const res = [...pre];
  //     console.log(res);

  //     if (res[id - 1] >= 2 && res[id - 1]<=99) {
  //       res[id - 1] -= 1;
  //     }
  //     return res;
  //   });
  //   setSubTotalArr((pre) => {
  //     const res = [...pre];
  //     if (quantityArr[id - 1] >= 2 && quantityArr[id - 1] <= 99) res[id - 1] -= Number(cart[id - 1].price);
  //     return res;
  //   });
  // };
  // const increaseNumber = (id: number) => {
  //   setQuantityArr((pre) => {
  //     const res = [...pre];
  //     if (res[id - 1] >= 1 && res[id - 1] <= 99)
  //       res[id - 1] += 1;
  //     return res;
  //   });
  //   setSubTotalArr((pre)=>{
  //     const res = [...pre]
  //     if (quantityArr[id - 1] >= 1 && quantityArr[id - 1] <= 99) res[id - 1] += Number(cart[id - 1].price);
  //     return res
  //   })
  // };
  // console.log(subTotalArr, quantityArr);
  return (
    <div className="container mt-[6rem]">
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
            <tbody className="w-full">
              {cart.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem id={item.id} img={item.img} name={item.name} price={item.price} quantity={item.quantity} />
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[82.3%] mx-auto h-[14.8rem] bg-fefefd ">
        <div className="px-[2rem] w-full text-secondary pt-[1.6rem] pb-[2.8rem] flex justify-end">
          <div className="pr-[8.3rem]">
            <div className="w-[39.2rem] flex justify-between">
              <p className="font-semibold text-[2.4rem] text-primary uppercase">TOTAL</p>
              <p className="font-semibold text-[2.4rem] text-primary uppercase">
                {/* {cart
                  .reduce(
                    (accumulator, currentItem) =>
                      accumulator + (Number(currentItem?.price) || 0) * Number(currentItem.quantity),
                    0,
                  )
                  .toFixed(2)} */}
                {/* {(subTotalArr.reduce((totalPrice, subTotal) => totalPrice + subTotal, 0)).toFixed(2)} $ */}
                {totalPrice} $
              </p>
            </div>
            <div className="w-[39.2rem] flex justify-between mt-[1.6rem]">
              <button
                className="w-[14.5rem] h-[5.2rem] text-666565 border-[1.5px] border-666565 uppercase"
                onClick={updateCartHandle}
              >
                update cart
              </button>
              <button className="w-[22.7rem] h-[5.2rem] text-white btn-secondary uppercase font-normal">
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
