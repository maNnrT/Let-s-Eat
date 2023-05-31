import React from 'react';
import { getPriceOrderSelector } from '@/redux/selectors';
import { priceOrderChange } from '@/redux/features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PriceOrderValue } from '@/enum/enum';

function PriceOrderMobile() {
  const dispatch = useDispatch();

  const priceOrder = useSelector(getPriceOrderSelector);
  const handlePriceOrder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(priceOrderChange((e.target as HTMLButtonElement | HTMLInputElement).value));
  };
  return (
    <>
      <div>
        <input
          type="radio"
          name="priceOrder"
          id={PriceOrderValue.DEFAULT}
          value={PriceOrderValue.DEFAULT}
          className="hidden peer"
          onChange={handlePriceOrder}
          checked={priceOrder === PriceOrderValue.DEFAULT}
        />
        <label
          htmlFor={PriceOrderValue.DEFAULT}
          className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                        cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
        >
          {PriceOrderValue.DEFAULT}
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="priceOrder"
          id={PriceOrderValue.HIGHTOLOW}
          value={PriceOrderValue.HIGHTOLOW}
          className="hidden peer"
          onChange={handlePriceOrder}
          checked={priceOrder === PriceOrderValue.HIGHTOLOW}
        />
        <label
          htmlFor={PriceOrderValue.HIGHTOLOW}
          className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                        cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
        >
          {PriceOrderValue.HIGHTOLOW}
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="priceOrder"
          id={PriceOrderValue.LOWTOHIGH}
          value={PriceOrderValue.LOWTOHIGH}
          className="hidden peer"
          onChange={handlePriceOrder}
          checked={priceOrder === PriceOrderValue.LOWTOHIGH}
        />
        <label
          htmlFor={PriceOrderValue.LOWTOHIGH}
          className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                        cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
        >
          {PriceOrderValue.LOWTOHIGH}
        </label>
      </div>
    </>
  );
}

export default PriceOrderMobile;
