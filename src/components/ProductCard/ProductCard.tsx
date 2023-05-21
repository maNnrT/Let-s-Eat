import { useDispatch, useSelector } from 'react-redux';
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
  return (
    <div className="w-full h-fit bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)] ">
      <div className="w-full h-[26.1rem] overflow-hidden">
        <LazyLoadImage
          src={img}
          alt=""
          className="w-full h-[26.1rem] object-cover group-hover:scale-110 duration-500 cursor-pointer"
          onClick={() => dispatch(setOpenModalTrue(id))}
        />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full">
        <p className="text-[2.2rem] leading-[2.9rem] font-fahkwang font-semibold text-444546 text-left line-clamp-1">
          {name}
        </p>
        <p className="text-[1.6rem] font-light text-3d3535 mt-[0.3rem] text-left min-h-[4.8rem] line-clamp-2">
          “{description}”
        </p>
        <div className="flex justify-between items-end mt-[1rem] self-end w-full mb-[0.8rem]">
          <p className="font-bold text-[2.2rem] leading-[3.7rem] text-394149">${price}</p>
          <p
            className="font-bold text-[1.8rem] leading-[3rem] text-secondary cursor-pointer"
            onClick={() => dispatch(setOpenModalTrue(id))}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;