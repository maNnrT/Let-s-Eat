interface Props {
  img: string;
}

function BannerSliderItem({ img }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full desktop:h-[90rem] h-[32rem] bg-center bg-cover relative duration-500"
    ></div>
  );
}

export default BannerSliderItem;
