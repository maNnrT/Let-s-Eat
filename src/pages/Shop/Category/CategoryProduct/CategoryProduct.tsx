import React from 'react';
import cart from '@/assets/svg/cart.svg';
interface Props {
  id: number | undefined;
  name: string;
  img: string;
  ingredient?: string;
  price?: string;
}
function CategoryProduct({ id, name, img, ingredient, price }: Props) {
  return (
    <div className="flex justify-start items-center h-[10rem] mb-[1.2rem] ">
      <div className="w-[10rem] h-[10rem] basis-[10rem] grow-0 shrink-0 relative group ">
        <img src={img} alt="" className=" " />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.5)] group-hover:duration-200">
          <div className="absolute top-0 bottom-0 left-0 right-0 h-[4.8rem] w-[4.8rem] m-auto group-hover:bg-secondary flex justify-center items-center group-hover:duration-200">
            <div className="hidden group-hover:block group-hover:duration-200">
              <img src={cart} alt="" className="duration-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full ml-[1.6rem] ">
        <div className="pt-[0.4rem] flex justify-between items-center mt-[0.7rem]">
          <p className="font-fahkwang font-normal text-[2rem] leading-[2.6rem] text-primary line-clamp-1">{name}</p>
          <div className="border-b-[4px] border-dotted border-666565 flex-1 h-[1.8rem] mx-[0.7rem]"></div>
          <p className="font-normal text-[2.4rem] leading-[130%] text-333231">${price}</p>
        </div>
        <div className="mt-[1.2rem] flex justify-between items-center">
          <p className="text-333231 font-light text-[1.6rem] leading-[130%] max-w-[24.8rem] line-clamp-2">
            {ingredient}
          </p>
          {
            <p className="w-[4.5rem] h-[2.6rem] bg-secondary flex justify-center items-center font-normal text-[1.4rem] leading-[130%]">
              New
            </p>
          }
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
