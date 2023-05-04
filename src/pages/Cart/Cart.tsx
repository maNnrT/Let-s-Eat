import * as React from 'react'
import heroBannerCart from '../../assets/image/HeroBanner_Cart.png';
function Cart() {
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">MENU COMBO</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Menu Combo</p>
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
        <div className="container mt-[6rem]">
          <div className="bg-fefefd w-[89.5%] h-auto min-h-[50rem] mx-auto shadow-[0_147px_183px_rgba(0,0,0,0.07)] px-[2rem] pb-[2.8rem]">
            <table className="w-full h-auto">
              <tr className=" h-[6rem]  border-b-[0.15rem] border-d9d9d9">
                <th className="">
                  <div className="flex justify-center items-center">
                    <p className="font-medium text-[1.8rem] text-primary">Product</p>
                  </div>
                </th>
                <th className="">
                  <div className="flex justify-center items-center">
                    <p className="font-medium text-[1.8rem] text-primary">Price</p>
                  </div>
                </th>
                <th className="">
                  <div className="flex justify-center items-center">
                    <p className="font-medium text-[1.8rem] text-primary">Quantity</p>
                  </div>
                </th>
                <th>
                  <div className="flex justify-center items-center">
                    <p className="font-medium text-[1.8rem] text-primary"></p>
                  </div>
                </th>
              </tr>
            </table>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart