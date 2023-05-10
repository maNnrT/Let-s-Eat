interface Props {
  img: string;
}

function BannerSliderItem({ img }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[90rem] bg-center bg-cover relative duration-500"
    ></div>
  );
}

export default BannerSliderItem;
