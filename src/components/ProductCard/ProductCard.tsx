import { useDispatch, } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as React from 'react';
import { setOpenModalTrue } from '@/redux/features/modalSlice/modalSlice';
interface Props {
  id: number | undefined;
  img: string;
  name: string;
  description?: string;
  price?: string;
}
function ProductCard({ id, img, name, description, price }: Props) {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setOpenModalTrue(id));
  };
  return (
    <div 
      className="tablet:w-full w-[22rem] h-full bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)] "
      key={id}
    >
      <div className="w-full tablet:h-[26.1rem] h-[20.6rem] overflow-hidden">
        <LazyLoadImage
          src={img}
          alt=""
          className="w-full tablet:h-[26.1rem] h-[20.6rem] object-cover group-hover:scale-110 duration-500 cursor-pointer transition-all"
          onClick={openModal}
        />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full flex-1">
        <p className="tablet:text-[2.2rem] text-[1.6rem] leading-[130%] font-fahkwang font-semibold text-444546 text-left line-clamp-1">
          {name}
        </p>
        <p className="tablet:text-[1.6rem] text-[1.4rem] font-light text-3d3535 mt-[0.3rem] text-left tablet:min-h-[4.8rem] line-clamp-2">
          “{description}”
        </p>
        <div className="flex justify-between items-end tablet:mt-[1rem] mt-[0.4rem] self-end w-full tablet:mb-[0.8rem] mb-[0.7rem]">
          <p className="font-bold tablet:text-[2.2rem] text-[1.8rem] leading-[170%] text-394149">${price}</p>
          <p
            className="font-bold tablet:text-[1.8rem] text-[1.6rem] leading-[170%] text-secondary cursor-pointer"
            onClick={openModal}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
