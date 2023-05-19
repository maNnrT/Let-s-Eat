import * as React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import {
  decreaseComboItemQuantity,
  increaseComboItemQuantity,
  removeComboItemFromCart,
} from '@/redux/features/cart/CartSlice';
interface Props {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
}
function CartComboItem({ id, img, name, price, quantity }: Props): JSX.Element {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = React.useState<string>('');
  const decreaseNumber = () => {
    dispatch(decreaseComboItemQuantity(id));
  };
  const increaseNumber = () => {
    dispatch(increaseComboItemQuantity(id));
  };
  const removeItem = () => {
    dispatch(removeComboItemFromCart(id));
  };
  React.useEffect(() => {
    setSubTotal((Number(price) * quantity).toFixed(2));
  }, [quantity, price]);
  return (
    <tr className="h-fit w-full ">
      <td className="pb-[1.8rem] px-[2.4rem] pt-[1.8rem] ">
        <div className="flex justify-start items-center">
          <div onClick={removeItem} className="cursor-pointer hover:scale-150 hover:duration-500">
            <ImCross size={16} color="rgba(177,174,172,0.5)"></ImCross>
          </div>
          <img
            src={img}
            alt=""
            className="w-[6.3rem] h-[6.3rem] object-cover ml-[4.2rem] hover:scale-125 hover:duration-500"
          />
          <p className="ml-[2rem] text-[2rem] font-light text-666565">{name}</p>
        </div>
      </td>
      <td>
        <div className="flex justify-end items-center">
          <p className="text-[2rem] font-light text-666565">{price} $</p>
        </div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <div className="h-[2.8rem] flex justify-start ">
            <button className="w-[2.8rem] h-full bg-e9e9e9 text-[1.6rem] text-aaa9a9" onClick={decreaseNumber}>
              -
            </button>
            <input
              type="text"
              className="h-full outline-none w-[5.4rem] text-primary text-center"
              min="1"
              value={quantity}
              readOnly
            />
            <button className="w-[2.8rem] h-full bg-e9e9e9 text-[1.2rem] text-aaa9a9" onClick={increaseNumber}>
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="flex justify-end items-center pr-[8.3rem]">
          <p className="text-[2rem] font-normal text-primary subTotal">{subTotal} $</p>
        </div>
      </td>
    </tr>
  );
}

export default CartComboItem;
