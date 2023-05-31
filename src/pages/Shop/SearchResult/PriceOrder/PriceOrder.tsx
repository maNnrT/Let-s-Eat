import React from 'react';
import { priceOrderChange } from '@/redux/features/filter/filterSlice';
import { useDispatch } from 'react-redux';
import Tippy from '@tippyjs/react';
import { PriceOrderValue } from '@/enum/enum';
import { BsChevronDown } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

function PriceOrder() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const priceOrder = searchParams.get('order');

  const [showPriceOrder, setShowPriceOrder] = React.useState<boolean>(false);
  const handlePriceOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setShowPriceOrder(false);
    searchParams.set('order', (e.target as HTMLButtonElement).value);
    setSearchParams(searchParams);
  };
  React.useEffect(() => {
    dispatch(priceOrderChange(priceOrder));
  }, [dispatch, priceOrder]);
  return (
    <Tippy
      visible={showPriceOrder}
      placement="bottom"
      interactive={true}
      duration={100}
      offset={[0, 3]}
      animation="scale-subtle"
      content={
        <div className="w-[20rem] h-fit text-666565 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] ">
          <button
            className=" w-full h-[4rem] text-left text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
            onClick={handlePriceOrder}
            value={PriceOrderValue.DEFAULT}
          >
            {PriceOrderValue.DEFAULT}
          </button>
          <button
            className=" w-full h-[4rem] text-left text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
            onClick={handlePriceOrder}
            value={PriceOrderValue.HIGHTOLOW}
          >
            {PriceOrderValue.HIGHTOLOW}
          </button>
          <button
            className=" w-full h-[4rem] text-left text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
            onClick={handlePriceOrder}
            value={PriceOrderValue.LOWTOHIGH}
          >
            {PriceOrderValue.LOWTOHIGH}
          </button>
        </div>
      }
      onClickOutside={() => setShowPriceOrder(false)}
    >
      <button
        className="w-[20rem] h-[4rem] text-666565 flex justify-between items-center ml-[2rem] px-[1.5rem]
    shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
        onClick={() => setShowPriceOrder(!showPriceOrder)}
      >
        <p>{priceOrder}</p>
        <BsChevronDown />
      </button>
    </Tippy>
  );
}

export default PriceOrder;
