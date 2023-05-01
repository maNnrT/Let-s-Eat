import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdSelector } from '../../../../redux/selectors';
import { getProductById } from '../../../../redux/Slice/ProductsSlice';

interface Props {
  id: number | undefined;
  onClose: () => void;
}
function FreshBakedItemDetail({ id, onClose }: Props) {
  const dispatch = useDispatch();
  const productById = useSelector(getProductByIdSelector);
  React.useEffect(() => {
    if (id) dispatch(getProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-[rgba(0,0,0,0.5)] absolute h-full w-full z-10">
      <div className="container grid grid-cols-2 gap-x-[3.2rem] h-auto m-auto absolute right-0 left-0 top-[36.1rem] bg-fdf9f5">
        <img src={productById.img} alt="" className="w-full" />
        <div>
          <div className="mt-[9rem]">
            <span className="text-secondary mr-[0.8rem] text-[3.2rem] ">—</span>
            <p className="font-normal text-[1.8rem] text-secondary inline-block uppercase">Dish detail</p>
          </div>
          <h2 className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 uppercase">
            {productById.name}
          </h2>
          <p className="mt-[2.4rem] font-fahkwang font-normal text-[3.2rem] leading-[100%] text-2d2d2d">
            ${productById.price}
          </p>
          <p className="font-light text-[1.6rem] text-666565 mt-[2.8rem]">{productById.detail}</p>
          <button className="mt-[2.4rem] btn-secondary">ADD TO CART</button>
          <span
            className="text-666565 text-[6rem] absolute top-[3.2rem] right-[3.2rem] leading-[2rem] cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default FreshBakedItemDetail;
