// interface Props {
//   img: string;
//   name: string;
//   description: string;
//   price: number;
// }
import IMG from '@/assets/image/image8.png';
function CarouselItem() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full flex justify-center">
        <img src={IMG} alt="" className="w-[6rem] h-[6rem] desktop:w-[12rem] desktop:h-[12rem]" />
      </div>
      <div className="w-full px-[2rem] desktop:mt-[3rem] mt-[1.2rem]">
        <p className="desktop:text-[2rem] text-[1.6rem] leading-[140%] font-light text-3d3535 text-center desktop:line-clamp-4 line-clamp-5">
          "I just wanted to let you know how much my family enjoyed the cake you made for my husband's birthday. It was
          truly delicious! Thanks again. I now have a new favorite bakery!”
        </p>
        <p className="desktop:text-[2rem] text-[1.6rem] font-medium text-3d3535 desktop:mt-[0.8rem] mt-[0.4rem] desktop:mb-[3.2rem] text-center mb-[1rem]">
          Karen P, New York
        </p>
      </div>
    </div>
  );
}

export default CarouselItem;
