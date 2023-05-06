import * as React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from '../../../../redux/feature/CartSlice';
type item = {
  id: number;
  idItem: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};
interface Props {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
}

function CartItem({ id, img, name, price, quantity }: Props): JSX.Element {
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = React.useState<string>('');
  // const [numberInput, setNumberInput] = React.useState<number>(quantity);

  const decreaseNumber = () => {
    // setNumberInput((pre: number): number => {
    //   if (pre >= 2 && pre <= 99) return pre - 1;
    //   else return 1;
    // });
    dispatch(decreaseItemQuantity(id));
    // decrease(id)
  };
  const increaseNumber = () => {
    // setNumberInput((pre: number): number => {
    //   if (pre >= 1 && pre <= 99) return pre + 1;
    //   else return 1;
    // });
    dispatch(increaseItemQuantity(id));
    // increase(id)
  };
  const removeItem = () => {
    dispatch(removeItemFromCart(id));
  };
  React.useEffect(() => {
    setSubTotal((Number(price) * Number(quantity)).toFixed(2));
  }, [quantity, price]);
  // // React.useEffect(()=>{
  // //   setNumberInput(quantity)
  // // },[quantity])
  return (
    <tr className="h-fit w-full">
      <td className="pb-[1.8rem] px-[2.4rem] pt-[2.4rem]">
        <div className="flex justify-start items-center">
          <div onClick={removeItem} className="cursor-pointer">
            <ImCross size={16} color="rgba(177,174,172,0.5)"></ImCross>
          </div>
          <img src={img} alt="" className="w-[6.3rem] h-[6.3rem] object-cover ml-[4.2rem]" />
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
              type="number"
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

export default CartItem;
