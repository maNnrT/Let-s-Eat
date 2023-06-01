import cart from '@/assets/svg/cart.svg';
interface Props {
  id: number | undefined;
  name: string;
  img: string;
  ingredient?: string;
  price?: string;
}
function CategoryProduct({ name, img, ingredient, price }: Props) {
  return (
    <div className="flex justify-start items-center desktop:h-[10rem] h-[5rem] desktop:mb-[1.2rem] mb-[0.8rem]  ">
      <div className="desktop:w-[10rem] desktop:h-[10rem] w-[5rem] h-[5rem] desktop:basis-[10rem] grow-0 shrink-0 relative group ">
        <img src={img} alt="" className="h-full " />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.5)] group-hover:duration-200 hidden desktop:block">
          <div className="absolute top-0 bottom-0 left-0 right-0 h-[4.8rem] w-[4.8rem] m-auto group-hover:bg-secondary flex justify-center items-center group-hover:duration-200">
            <div className="hidden group-hover:block group-hover:duration-200">
              <img src={cart} alt="" className="duration-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full desktop:ml-[1.6rem] ml-[1.2rem] justify-center desktop:justify-start">
        <div className="desktop:pt-[0.4rem] flex justify-between items-center desktop:mt-[0.7rem]">
          <div className="flex">
            <p className="font-fahkwang font-normal desktop:text-[2rem] desktop:leading-[2.6rem] text-primary line-clamp-1 desktop:mr-0 mr-[0.4rem]">
              {name}
            </p>
            <p className="text-secondary desktop:text-[1.4rem] desktop:leading-[130%] text-[1.2rem] flex desktop:hidden">
              New
            </p>
          </div>
          <div className="border-b-[4px] border-dotted border-666565 flex-1 h-[1.8rem] mx-[0.7rem] hidden desktop:block"></div>
          <p className="font-normal desktop:text-[2.4rem] desktop:leading-[130%] text-[2rem] text-333231">${price}</p>
        </div>
        <div className="mt-[1.2rem] justify-between items-center hidden desktop:flex">
          <p className="text-333231 font-light text-[1.6rem] leading-[130%] max-w-[24.8rem] line-clamp-2">
            {ingredient}
          </p>
          <p className="w-[4.5rem] h-[2.6rem] bg-secondary flex justify-center items-center font-normal text-[1.4rem] leading-[130%]">
            New
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
