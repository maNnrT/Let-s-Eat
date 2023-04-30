import React from 'react';
interface Props {
  id:number;
  name: string;
  img: string;
  ingredient: string;
  price: string;
}
function FreshBakedItem({id,name,img,ingredient,price}:Props) {
  return (
    <div className="flex justify-start items-center h-[10rem] mb-[1.2rem]">
      <img src={img} alt="" className="w-[10rem] mr-[1.6rem]" />
      <div className="flex flex-col w-full h-full">
        <div className="pt-[0.4rem] flex justify-between items-center mt-[0.7rem]">
          <p className="font-fahkwang font-normal text-[2rem] leading-[2.6rem] text-primary ">{name}</p>
          <p className="font-normal text-[2.4rem] leading-[130%] text-333231">${price}</p>
        </div>
        <div className="mt-[1.2rem] flex justify-between items-center">
          <p className="text-333231 font-light text-[1.6rem] leading-[130%] max-w-[24.8rem]">
            {ingredient}
          </p>
          {<p className="w-[4.5rem] h-[2.6rem] bg-secondary flex justify-center items-center font-normal text-[1.4rem] leading-[130%]">
            New
          </p>}
        </div>
      </div>
    </div>
  );
}

export default FreshBakedItem;
