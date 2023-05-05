import * as React from 'react';
import heroBannerCart from '../../assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getIdUser, getUserCartListSelector } from '../../redux/selectors';
import { getUserCartList } from '../../redux/Slice/CartSlice';
import CartTable from './CartTable';
type item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: string;
};
type userCart = {
  cart: item[];
  userId: number;
};
function Cart(): JSX.Element {
  const userCartList = useSelector(getUserCartListSelector);
  
  const idUser = useSelector(getIdUser);
  const userCartMatchID = userCartList.find((userCart: userCart) => {
    return userCart.userId === idUser;
  });
  console.log(userCartMatchID);
  
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserCartList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Food delivery</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Cart</p>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] pb-[12rem] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          OUR HONOR
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          We are honored to bring deliciousness to the table for you and your family. Don't forget to add Let's Eat
          bakery to your list of favorite stores!
        </p>
        {userCartMatchID ? (
          <CartTable cart={userCartMatchID.cart} />
        ) : (
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
                  <tbody className="w-full h-[41.6rem]">
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[82.3%] mx-auto h-[14.8rem] bg-fefefd ">
              <div className="px-[2rem] w-full text-secondary pt-[1.6rem] pb-[2.8rem] flex justify-end">
                <div className="pr-[8.3rem]">
                  <div className="w-[39.2rem] flex justify-between">
                    <p className="font-semibold text-[2.4rem] text-primary uppercase">TOTAL</p>
                    <p className="font-semibold text-[2.4rem] text-primary uppercase">22.90 $</p>
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
        )}
      </div>
    </div>
  );
}

export default Cart;
