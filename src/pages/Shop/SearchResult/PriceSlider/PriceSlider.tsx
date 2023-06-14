import { priceFilterChange } from '@/redux/features/filter/filterSlice';
import { getPriceFilterSelector } from '@/redux/selectors';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { PriceSliderValue } from '@/enum/enum';
import { useSearchParams } from 'react-router-dom';

const CustomSlider = styled(Slider)({
  color: '#D08C30',
  '& .MuiSlider-thumb': {
    width: '15px',
    height: '15px',
    borderRadius: '9999999px',

    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: '0px 0px 0px 8px rgba(208,140,48,0.2)',
    },
    [`&.Mui-active`]: {
      boxShadow: '0px 0px 0px 8px rgba(208,140,48,0.2)',
    },
  },
});
function PriceSlider() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const priceRangeSearchQuery = searchParams.get('price');

  const priceRangeStore = useAppSelector(getPriceFilterSelector);
  const [range, setRange] = React.useState<number[]>(
    priceRangeSearchQuery
      ? priceRangeSearchQuery.split(',').map((str) => {
          return parseInt(str, 10);
        })
      : [...priceRangeStore],
  );
  function handleChanges(_: Event, newValue: number | number[], activeThumb: number) {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - PriceSliderValue.minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + PriceSliderValue.minDistance)]);
    }
  }
  const applyPrice = () => {
    // console.log(range);
    searchParams.set('price', `${range[0].toString()},${range[1].toString()}`);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };
  React.useEffect(() => {
    if (priceRangeSearchQuery) {
      dispatch(
        priceFilterChange(
          priceRangeSearchQuery.split(',').map((str) => {
            return parseInt(str, 10);
          }),
        ),
      );
      setRange(
        priceRangeSearchQuery.split(',').map((str) => {
          return parseInt(str, 10);
        }),
      );
    }
  }, [dispatch, priceRangeSearchQuery]);
  return (
    <div className="desktop:mt-[4rem] w-full">
      <p className="text-secondary text-[2rem] hidden desktop:block">Price</p>
      <CustomSlider value={range} onChange={handleChanges} valueLabelDisplay="off" disableSwap max={50} />
      <div className="flex justify-between items-center">
        <div className="text-666565 desktop:text-[1.6rem] text-[1.4rem]">
          <span>{range[0].toFixed(2)}$</span> - <span>{range[1].toFixed(2)}$</span>
        </div>
        <button
          className="desktop:btn-secondary desktop:w-[8rem] desktop:h-[3rem] desktop:text-[2rem] text-[1.4rem] text-secondary"
          onClick={applyPrice}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default PriceSlider;
