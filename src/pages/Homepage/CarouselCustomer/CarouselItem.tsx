interface Props {
  img: string;
  name: string;
  description:string;
  price:number
}
import IMG from '../../../assets/image/image8.png'
function CarouselItem() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full flex justify-center">
        <img src={IMG} alt="" />
      </div>
      <div className="w-full px-[1.6rem] mt-[3rem]">
        <p className="text-[2rem] leading-[3.3rem] font-light text-3d3535 text-center">
          "I just wanted to let you know how much my family enjoyed the cake you made for my husband's birthday. It was
          truly delicious! Thanks again. I now have a new favorite bakery!”
        </p>
        <p className="text-[2rem] font-medium text-3d3535 mt-[0.8rem] text-center ">Karen P, New York</p>
      </div>
    </div>
  );
}

export default CarouselItem