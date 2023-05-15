import React from 'react'
interface Props{
  id:number|undefined
  name:string
}
function PopperItem({id,name}:Props) {
  return (
    <div className="">
      <div className=" py-[0.8rem] px-[2rem] cursor-pointer hover:bg-gray-100">
        <p className="text-primary text-[1.6rem]">{name}</p>
      </div>
    </div>
  );
}

export default PopperItem