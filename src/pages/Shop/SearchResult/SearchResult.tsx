import * as React from 'react';
import heroBannerCategory from '@/assets/image/HeroBanner_Category.png';
import cookieImg from '@/assets/image/image10.png';
import coffeeTeaImg from '@/assets/image/image11.png';
import freshBakedImg from '@/assets/image/image12.png';
import cheeseCake from '@/assets/image/image13.png';
import config from '@/config';
import Slider from '@mui/material/Slider';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { styled } from '@mui/material/styles';
import Checkbox from '@/components/Checkbox/Checkbox';
import { BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import { Product } from '@/types/types';
import { getProductsByFiltersSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ResultPaginate from './ResultPaginate/ResultPaginate';
import { comboFilterChange, priceFilterChange, priceOrderChange, typeFilterChange } from '@/redux/features/products/ProductsSlice';
import { PriceSlider } from '@/enum/enum';
const categories = [
  { title: 'Fresh Baked', value: 'fresh-baked' },
  { title: 'Cookies', value: 'cookies' },
  { title: 'Coffee & Tea', value: 'coffee&tea' },
  { title: 'Chessecake', value: 'chessecake' },
];

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
function SearchResult() {
  const products: Product[] = useSelector(getProductsByFiltersSelector);
  const dispatch = useDispatch();
  const [showPriceOrder, setShowPriceOrder] = React.useState<boolean>(false);
  const [priceOrder, setPriceOrder] = React.useState<string>('Price');
  const [range, setRange] = React.useState<number[]>([PriceSlider.MIN, PriceSlider.MAX]);
  function handleChanges(_: Event, newValue: number | number[], activeThumb: number) {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - PriceSlider.minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + PriceSlider.minDistance)]);
    }
  }
  const applyPrice = () => {
    // console.log(range);
    dispatch(priceFilterChange(range));
  };
  const [isComboChecked, setIsComboChecked] = React.useState<boolean>(false);
  const handleComboCheck = () => {
    setIsComboChecked(!isComboChecked);
    dispatch(comboFilterChange(!isComboChecked));
  };
  const handleCategoryChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    dispatch(typeFilterChange((e.target as HTMLButtonElement).value));
  };
  return (
    <div className="w-full mb-[-12rem]">
      <div
        className="w-full h-[60rem] bg-center bg-cover bg-no-repeat relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Category</p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">search</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          Search result
        </h1>
        <div className="container grid grid-cols-[auto_75%] gap-x-[3.2rem] h-fit mt-[6rem] mb-[12rem] relative">
          <div className="h-fit bg-white shadow-[0px_147px_183px_rgba(0,0,0,0.07)] pt-[2rem] px-[3rem] pb-[2rem] flex flex-col items-start sticky top-[7.5rem] right-0">
            <div className="w-full">
              <p className="text-secondary text-[2rem]">Category</p>
              {categories.map((category) => (
                <button
                  className="block w-full text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] 
                  border-b-[1px] border-secondary hover:bg-gray-100 cursor-pointer duration-200 last-of-type:border-0
                  active:bg-gray-100"
                  key={categories.indexOf(category)}
                  onClick={handleCategoryChange}
                  value={category.value}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <div className="mt-[4rem] w-full">
              <p className="text-secondary text-[2rem]">Price</p>
              <CustomSlider value={range} onChange={handleChanges} valueLabelDisplay="off" disableSwap />
              <div className="flex justify-between items-center">
                <div className="text-666565">
                  <span>{range[0].toFixed(2)}$</span> - <span>{range[1].toFixed(2)}$</span>
                </div>
                <button className="btn-secondary w-[8rem] h-[3rem]" onClick={applyPrice}>
                  Apply
                </button>
              </div>
            </div>
            <Checkbox
              label="Combo"
              checked={isComboChecked}
              onChange={handleComboCheck}
              name="combo"
              classNameLabel="relative text-secondary text-[2rem] flex justify-between w-full items-center cursor-pointer"
              classNameInput="checkbox"
              classNameWrapper="mt-[4rem] w-full"
            />
          </div>
          <div className="h-fit flex flex-col gap-y-[3.2rem] justify-start">
            <div
              className="h-[8rem] pt-[2rem] px-[3rem] pb-[2rem] flex justify-between items-center bg-white 
            shadow-[0px_147px_183px_rgba(0,0,0,0.07)]"
            >
              <div className="flex justify-between items-center">
                <p className="text-666565 text-[2rem]">Order by</p>
                {/* <button className="btn-secondary w-[10rem] h-[4rem] ml-[2rem]">Newest</button> */}
                {/* <button className="btn-secondary w-[10rem] h-[4rem] ml-[2rem]">Best seller</button> */}
                <Tippy
                  visible={showPriceOrder}
                  placement="bottom"
                  interactive={true}
                  duration={100}
                  offset={[0, 3]}
                  content={
                    <div className="w-[20rem] h-fit text-666565 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]  ">
                      <p
                        className="text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
                        onClick={() => {
                          setPriceOrder('Default');
                          setShowPriceOrder(false);
                          dispatch(priceOrderChange('default'))
                        }}
                      >
                        Default
                      </p>
                      <p
                        className="text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
                        onClick={() => {
                          setPriceOrder('From high to low');
                          setShowPriceOrder(false);
                          dispatch(priceOrderChange('highToLow'));

                        }}
                      >
                        From high to low
                      </p>
                      <p
                        className="text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
                        onClick={() => {
                          setPriceOrder('From low to high');
                          setShowPriceOrder(false);
                          dispatch(priceOrderChange('lowToHigh'));

                        }}
                      >
                        From low to high
                      </p>
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
              </div>
              {/* <div className="w-[8.8rem] flex justify-between">
                <button className="paginationBtn">
                  <BsChevronLeft size={20} />
                </button>
                <button className="paginationBtn">
                  <BsChevronRight size={20} />
                </button>
              </div> */}
            </div>
            <div className="  gap-[1.6rem] pt-[2rem] px-[3rem] pb-[2rem] bg-white h-fit">
              <ResultPaginate products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
