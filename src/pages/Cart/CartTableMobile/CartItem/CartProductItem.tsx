import * as React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import {
  decreaseProductItemQuantity,
  increaseProductItemQuantity,
  removeProductItemFromCart,
} from '@/redux/features/cart/CartSlice';
import { FaTrashAlt } from 'react-icons/fa';
interface Props {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
}
function CartProductItem({ id, img, name, price, quantity }: Props): JSX.Element {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = React.useState<string>('');
  const decreaseNumber = () => {
    dispatch(decreaseProductItemQuantity(id));
  };
  const increaseNumber = () => {
    dispatch(increaseProductItemQuantity(id));
  };
  const removeItem = () => {
    dispatch(removeProductItemFromCart(id));
  };
  React.useEffect(() => {
    setSubTotal((Number(price) * quantity).toFixed(2));
  }, [quantity, price]);
  return (
    <div className="flex justify-between items-start min-h-[10rem] mb-[0.8rem] border-b-[0.15rem] border-d9d9d9">
      <div className="flex">
        <img src={img} alt="" className="h-[5rem] w-[5rem] mr-[0.8rem] " />
        <div>
          <p className="font-fahkwang font-normal text-primary  mr-[1.2rem]">{name}</p>
          <div className="h-[2rem] flex justify-start mt-[0.8rem] items-center ">
            <button className="w-[2rem] h-full bg-e9e9e9 text-[1.6rem] text-aaa9a9" onClick={decreaseNumber}>
              -
            </button>
            <input
              type="text"
              className="h-full outline-none w-[5.4rem] text-primary text-center"
              min="1"
              value={quantity}
              readOnly
            />
            <button className="w-[2rem] h-full bg-e9e9e9 text-[1.2rem] text-aaa9a9 mr-[2rem]" onClick={increaseNumber}>
              +
            </button>
            <div onClick={removeItem} className="cursor-pointer">
              <FaTrashAlt size={20} color="rgba(177,174,172,0.5)" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-[1.8rem] font-normal text-primary">{subTotal} $</p>
    </div>
  );
}

export default CartProductItem;
