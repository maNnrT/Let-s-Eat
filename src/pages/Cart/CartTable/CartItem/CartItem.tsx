import * as React from 'react';
import { ImCross } from 'react-icons/im';
interface Props {
  img: string;
  name: string;
  price: string;
  quantity: string;
  increase: (num: number) => number;
  decrease: (num: number) => number;
}

function CartItem({ img, name, price, quantity }: Props): JSX.Element {
  const [numberInput, setNumberInput] = React.useState<number>(1);
  const [subTotal, setSubTotal] = React.useState<string>('');
  const decreaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 2 && pre <= 99) return pre - 1;
      else return 1;
    });
  };
  const increaseNumber = () => {
    setNumberInput((pre: number): number => {
      if (pre >= 1 && pre <= 99) return pre + 1;
      else return 1;
    });
  };
  React.useEffect(() => {
    setNumberInput(Number(quantity));
  }, [quantity]);
  React.useEffect(() => {
    setSubTotal((Number(price) * numberInput).toFixed(2).toString());
  }, [numberInput, price]);

  return (
    <tr className="h-fit w-full">
      <td className="pb-[1.8rem] px-[2.4rem] pt-[2.4rem]">
        <div className="flex justify-start items-center">
          <ImCross size={16} color="rgba(177,174,172,0.5)"></ImCross>
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
              value={numberInput}
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
          <p className="text-[2rem] font-normal text-primary">{subTotal} $</p>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
