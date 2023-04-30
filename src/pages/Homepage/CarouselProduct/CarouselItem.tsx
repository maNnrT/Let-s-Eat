interface Props {
  img: string;
  name: string;
  description:string;
  price:string
}
function CarouselItem({img,name,description,price}:Props) {
    // console.log("check:", img,name,description,price);
    
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="w-full h-[26.1rem]">
        <img src={img} alt="" className="w-full h-[26.1rem]" />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full">
        <p className="text-[2.2rem] leading-[2.9rem] font-fahkwang font-semibold text-444546 text-left">{name}</p>
        <p className="text-[1.6rem] font-light text-3d3535 mt-[0.3rem] text-left min-h-[4.8rem]">“{description}”</p>
        <div className="flex justify-between items-end mt-[1rem] self-end w-full">
          <p className="font-bold text-[2.2rem] leading-[3.7rem] text-394149">${price}</p>
          <p className="font-bold text-[1.8rem] leading-[3rem] text-secondary">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem