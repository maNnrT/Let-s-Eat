import * as React from 'react';
import CartItem from './CartItem/CartItem';

type item = {
  id: number;
  idItem: number;
  img: string;
  name: string;
  price: string;
  quantity: string;
};
interface Props {
  cart: item[];
}
function CartTable({ cart }: Props): JSX.Element {
  const [numberInput, setNumberInput] = React.useState<number>(1);
  const decreaseNumber = (num:number) => {
    if (num >= 2) return num - 1;
    else return 1;
  };
  const increaseNumber = (num:number) => {
    if (num >= 1) return num + 1;
    else return 1;
  };
  //  React.useEffect(() => {
  //    setNumberInput(Number(quantity));
  //  }, [numberInput]);
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
                  <CartItem
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    increase={increaseNumber}
                    decrease={decreaseNumber}
                  />
                </React.Fragment>
              ))}
              {/* <tr className="h-fit w-full  ">
                <td className="pb-[1.8rem] px-[2.4rem] pt-[2.4rem]">
                  <div className="flex justify-start items-center">
                    <ImCross size={16} color="rgba(177,174,172,0.5)"></ImCross>
                    <img
                      src="http://127.0.0.1:8887/image24.png"
                      alt=""
                      className="w-[6.3rem] h-[6.3rem] object-cover ml-[4.2rem]"
                    />
                    <p className="ml-[2rem] text-[2rem] font-light text-666565">Ciabata</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-end items-center">
                    <p className="text-[2rem] font-light text-666565">3.60</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    <div className="h-[2.8rem] flex justify-start ">
                      <button
                        className="w-[2.8rem] h-full bg-e9e9e9 text-[1.6rem] text-aaa9a9"
                        onClick={decreaseNumber}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="h-full outline-none w-[5.4rem] text-primary text-center"
                        min="1"
                        value={numberInput}
                        readOnly
                      />
                      <button
                        className="w-[2.8rem] h-full bg-e9e9e9 text-[1.2rem] text-aaa9a9"
                        onClick={increaseNumber}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex justify-end items-center pr-[8.3rem]">
                    <p className="text-[2rem] font-normal text-primary">3.60 $</p>
                  </div>
                </td>
              </tr> */}
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
                {cart
                  .reduce(
                    (accumulator, currentItem) =>
                      accumulator + (Number(currentItem?.price) || 0) * Number(currentItem.quantity),
                    0,
                  )
                  .toFixed(2)}{' '}
                $
              </p>
            </div>
            <div className="w-[39.2rem] flex justify-between mt-[1.6rem]">
              <button className="w-[14.5rem] h-[5.2rem] text-666565 border-[1.5px] border-666565 uppercase">
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
