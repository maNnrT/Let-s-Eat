interface Props {
  img: string;
  name: string;
  description:string;
  price:number
}
import IMG from '../../../assets/image/image4.png'
function CarouselItem() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-[26.1rem]">
        <img src={IMG} alt="" />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem]">
        <p className="text-[2.2rem] leading-[2.9rem] font-fahkwang font-semibold text-444546 text-left">
          Sweet Brioche
        </p>
        <p className="text-[1.6rem] font-light text-3d3535 mt-[0.3rem] text-left">
          “A traditionally sweet yeast bread loaded with eggs and butter”
        </p>
        <div className="flex justify-between items-end mt-[1rem]">
          <p className="font-bold text-[2.2rem] leading-[3.7rem] text-394149">$2.10</p>
          <p className="font-bold text-[1.8rem] leading-[3rem] text-secondary">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem