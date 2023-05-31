import * as React from 'react';
import heroBannerCategory from '@/assets/image/HeroBanner_Category.png';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { CiSliderHorizontal } from 'react-icons/ci';
import Slider from '@mui/material/Slider';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { styled } from '@mui/material/styles';
import Checkbox from '@/components/Checkbox/Checkbox';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';

import { Combo, Product } from '@/types/types';
import {
  getComboFilterSelector,
  getProductFilterSelector,
  getPriceFilterSelector,
  getPriceOrderSelector,
  getItemsByFilterSelector,
  getTypeSelector,
} from '@/redux/selectors';
import {
  comboFilterChange,
  priceFilterChange,
  priceOrderChange,
  productFilterChange,
  searchFilterChange,
  typeFilterChange,
} from '@/redux/features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import ResultPaginate from './ResultPaginate/ResultPaginate';
import { PriceSlider, PriceOrder } from '@/enum/enum';
import useDebounce from '@/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
const categories = [
  { title: 'All', value: 'all' },
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
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // React.useEffect(() => {
  //   // read the params on component load and when any changes occur
  //   const currentParams = Object.fromEntries([...searchParams]);
  //   // get new values on change
  //   console.log('useEffect:', currentParams);
  //   // update the search params programmatically
  //   setSearchParams(currentParams);
  // }, [searchParams]);
  const items: (Product | Combo)[] = useSelector(getItemsByFilterSelector);
  const [showFilter, setShowFilter] = React.useState(false);
  React.useMemo(() => {
    if (showFilter) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [showFilter]);
  const keyword = searchParams.get('keyword');
  const [searchValue, setSearchValue] = React.useState(keyword !== null ? keyword : '');
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const debouncedSearchValue: string = useDebounce<string>(searchValue, 500);

  const w = screen.width;

  const handleSearch = (): void => {
    setSearchValue(searchValue);
    dispatch(searchFilterChange(searchValue));
  };
  const handleClear = () => {
    setSearchValue('');
    dispatch(searchFilterChange(''));
    inputRef.current?.focus();
  };
  React.useEffect(() => {
    if (debouncedSearchValue === '') {
      dispatch(searchFilterChange(''));
    }
  }, [debouncedSearchValue, dispatch]);
  React.useEffect(() => {
    dispatch(searchFilterChange(searchValue));
    if (w >= 1280) window.scrollTo(0, 700);
  }, []);
  const type = useSelector(getTypeSelector);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(typeFilterChange((e.target as HTMLInputElement).value));
  };

  const [range, setRange] = React.useState<number[]>([...useSelector(getPriceFilterSelector)]);
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

  const priceOrder = useSelector(getPriceOrderSelector);
  const [showPriceOrder, setShowPriceOrder] = React.useState<boolean>(false);
  const handlePriceOrder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setShowPriceOrder(false);
    dispatch(priceOrderChange((e.target as HTMLButtonElement | HTMLInputElement).value));
  };

  const isComboChecked: boolean = useSelector(getComboFilterSelector);
  const handleComboCheck = () => {
    dispatch(comboFilterChange(!isComboChecked));
  };
  const isProductChecked: boolean = useSelector(getProductFilterSelector);
  const handleProductCheck = () => {
    dispatch(productFilterChange(!isProductChecked));
  };

  return (
    <div className="w-full desktop:mb-[-12rem]">
      <div
        className="w-full desktop:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang desktop:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] desktop:mb-0">
          Search
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem] desktop:block hidden">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase desktop:block hidden">
          search
        </p>
        <h1
          className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary 
        text-center uppercase mb-0 desktop:block hidden"
        >
          Search result
        </h1>
        <div
          className="container grid desktop:grid-cols-[auto_75%] grid-cols-1 gap-x-[3.2rem] h-fit desktop:mt-[6rem] 
        desktop:mb-[12rem] relative my-[2.4rem]"
        >
          <div
            className="h-fit bg-white shadow-[0px_147px_183px_rgba(0,0,0,0.07)] pt-[2rem] px-[3rem] pb-[2rem] 
           flex-col items-start sticky top-[7.5rem] right-0 desktop:flex hidden"
          >
            {/* Category */}
            <div className="w-full">
              <p className="text-secondary text-[2rem]">Category</p>
              {categories.map((category) => (
                <div key={categories.indexOf(category)} className="border-b-[1px] border-secondary">
                  <input
                    type="radio"
                    name="type"
                    id={category.value}
                    value={category.value}
                    className="hidden peer"
                    onChange={handleCategoryChange}
                    checked={type === category.value}
                  />
                  <label
                    htmlFor={category.value}
                    className="block w-full text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] 
                 hover:bg-gray-100 cursor-pointer duration-200 last-of-type:border-0
                peer-checked:bg-gray-100 peer-checked:text-secondary peer-checked:font-semibold"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
            {/* Price Slider */}
            <div className="mt-[4rem] w-full">
              <p className="text-secondary text-[2rem]">Price</p>
              <CustomSlider value={range} onChange={handleChanges} valueLabelDisplay="off" disableSwap max={50} />
              <div className="flex justify-between items-center">
                <div className="text-666565">
                  <span>{range[0].toFixed(2)}$</span> - <span>{range[1].toFixed(2)}$</span>
                </div>
                <button className="btn-secondary w-[8rem] h-[3rem]" onClick={applyPrice}>
                  Apply
                </button>
              </div>
            </div>

            {/* Check Combo,Product */}
            <Checkbox
              label="Combo"
              checked={isComboChecked}
              onChange={handleComboCheck}
              name="combo"
              classNameLabel="relative text-secondary text-[2rem] flex justify-between w-full items-center cursor-pointer"
              classNameInput="checkbox"
              classNameWrapper="mt-[4rem] w-full"
            />
            <Checkbox
              label="Product"
              checked={isProductChecked}
              onChange={handleProductCheck}
              name="product"
              classNameLabel="relative text-secondary text-[2rem] flex justify-between w-full items-center cursor-pointer"
              classNameInput="checkbox"
              classNameWrapper="mt-[2rem] w-full"
            />
          </div>
          <div className="h-fit flex flex-col gap-y-[3.2rem] justify-start col-span-2 desktop:col-span-1">
            <div
              className="h-[8rem] pt-[2rem] px-[3rem] pb-[2rem] justify-between items-center bg-white 
            shadow-[0px_147px_183px_rgba(0,0,0,0.07)] desktop:flex hidden "
            >
              <div className="flex justify-between items-center">
                <p className="text-666565 text-[2rem]">Order by</p>
                {/* Price Order */}
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
                        value={PriceOrder.DEFAULT}
                      >
                        {PriceOrder.DEFAULT}
                      </button>
                      <button
                        className=" w-full h-[4rem] text-left text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
                        onClick={handlePriceOrder}
                        value={PriceOrder.HIGHTOLOW}
                      >
                        {PriceOrder.HIGHTOLOW}
                      </button>
                      <button
                        className=" w-full h-[4rem] text-left text-666565 py-[0.7rem] hover:bg-gray-100 px-[1.5rem] cursor-pointer duration-200"
                        onClick={handlePriceOrder}
                        value={PriceOrder.LOWTOHIGH}
                      >
                        {PriceOrder.LOWTOHIGH}
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
              </div>

              {/* Search */}
              <div
                className="flex items-center h-[4rem] bg-white relative ml-[2rem] mr-[3rem] w-[30rem] pl-[1.5rem]
              shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              >
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  ref={inputRef}
                  placeholder="Search dish or combo"
                  className="text-primary h-fit outline-none mr-[2rem] flex-1 pr-[2rem] py-[0.7rem] placeholder:text-gray-500 "
                  spellCheck={false}
                />
                {!!searchValue && (
                  <button className="absolute top-[50%] translate-y-[-50%] right-[6rem]" onClick={handleClear}>
                    <IoMdCloseCircle size={19} color={'#D08C30'} />
                  </button>
                )}
                <button
                  className="w-fit h-full flex justify-center items-center px-[1.5rem] hover:bg-gray-50 duration-200 border-l-[1px] border-gray-200"
                  onClick={handleSearch}
                >
                  <IoMdSearch size={20} color={'#D08C30'} />
                </button>
              </div>
            </div>
            <div className="flex justify-end desktop:hidden">
              <div
                className="text-secondary text-right flex border-[1px] border-secondary px-[0.8rem] rounded-full cursor-pointer items-center"
                onClick={() => setShowFilter(!showFilter)}
              >
                <span className="mr-[0.8rem]">Filter</span>
                <CiSliderHorizontal size={20} />
              </div>
            </div>
            <div className="pt-[2rem] desktop:px-[3rem] px-[2rem] pb-[2rem] bg-white h-fit ">
              <ResultPaginate items={items} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          showFilter
            ? 'w-[100vw] h-[100vh] fixed bottom-0 top-0 right-0 left-0 bg-151618/50 ease-in-out duration-500 z-[3] '
            : ''
        }
      >
        <div
          className={
            showFilter
              ? 'w-[100vw] h-[100vh] fixed bottom-0 bg-white ease-in-out duration-500 z-[3] py-[2.4rem] '
              : 'w-[100vw] h-[100vh] fixed bottom-[-100%] bg-white ease-in duration-500 z-[3] py-[2.4rem] '
          }
        >
          <div className="container pt-[2.4rem]">
            <span
              className="text-666565 text-[6rem] absolute top-[1.5rem] right-[3.7rem] leading-[2rem] cursor-pointer z-10 font-light"
              onClick={() => {
                setShowFilter(!showFilter);
              }}
            >
              &times;
            </span>
            <div
              className="flex items-center h-[4rem] bg-white relative w-full pl-[1.5rem]
              shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
            >
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                ref={inputRef}
                placeholder="Search dish or combo"
                className="text-primary h-fit outline-none mr-[2rem] flex-1 pr-[2rem] py-[0.7rem] placeholder:text-gray-500 "
                spellCheck={false}
              />
              {!!searchValue && (
                <button className="absolute top-[50%] translate-y-[-50%] right-[6rem]" onClick={handleClear}>
                  <IoMdCloseCircle size={19} color={'#D08C30'} />
                </button>
              )}
              <button
                className="w-fit h-full flex justify-center items-center px-[1.5rem] hover:bg-gray-50 duration-200 border-l-[1px] border-gray-200"
                onClick={handleSearch}
              >
                <IoMdSearch size={20} color={'#D08C30'} />
              </button>
              {/* <div className="absolute top-[50%] translate-y-[-50%] right-[1.5rem]">
                      <ImSpinner8 color={'#D08C30'} />
                    </div> */}
            </div>
            <p className="text-secondary mt-[1.2rem]">Filter</p>

            <p className="text-secondary font-semibold mt-[1.2rem]">Category</p>
            <div className="pb-[1.2rem] border-b-[1px] border-secondary">
              {categories.map((category) => (
                <div key={categories.indexOf(category)}>
                  <input
                    type="radio"
                    name="typeMobile"
                    id={category.value}
                    value={category.value}
                    className="hidden peer"
                    onChange={handleCategoryChange}
                    checked={type === category.value}
                  />
                  <label
                    htmlFor={category.value}
                    className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                    cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-secondary font-semibold mt-[1.2rem]">Price</p>

            <div className="pb-[1.2rem] border-b-[1px] border-secondary">
              <div>
                <input
                  type="radio"
                  name="priceOrder"
                  id={PriceOrder.DEFAULT}
                  value={PriceOrder.DEFAULT}
                  className="hidden peer"
                  onChange={handlePriceOrder}
                  checked={priceOrder === PriceOrder.DEFAULT}
                />
                <label
                  htmlFor={PriceOrder.DEFAULT}
                  className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                    cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
                >
                  {PriceOrder.DEFAULT}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="priceOrder"
                  id={PriceOrder.HIGHTOLOW}
                  value={PriceOrder.HIGHTOLOW}
                  className="hidden peer"
                  onChange={handlePriceOrder}
                  checked={priceOrder === PriceOrder.HIGHTOLOW}
                />
                <label
                  htmlFor={PriceOrder.HIGHTOLOW}
                  className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                    cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
                >
                  {PriceOrder.HIGHTOLOW}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="priceOrder"
                  id={PriceOrder.LOWTOHIGH}
                  value={PriceOrder.LOWTOHIGH}
                  className="hidden peer"
                  onChange={handlePriceOrder}
                  checked={priceOrder === PriceOrder.LOWTOHIGH}
                />
                <label
                  htmlFor={PriceOrder.LOWTOHIGH}
                  className="block w-fit text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] 
                    cursor-pointer duration-200 peer-checked:text-secondary peer-checked:font-semibold"
                >
                  {PriceOrder.LOWTOHIGH}
                </label>
              </div>
              <CustomSlider value={range} onChange={handleChanges} valueLabelDisplay="off" disableSwap max={50} />
              <div className="flex justify-between items-center">
                <div className="text-666565">
                  <span>{range[0].toFixed(2)}$</span> - <span>{range[1].toFixed(2)}$</span>
                </div>
                <button className="text-[2rem] text-secondary " onClick={applyPrice}>
                  Apply
                </button>
              </div>
            </div>
            <div className="flex mt-[2rem]">
              <Checkbox
                label="Combo"
                checked={isComboChecked}
                onChange={handleComboCheck}
                name="combo"
                classNameLabel="relative text-secondary text-[2rem] flex justify-between w-full items-center cursor-pointer"
                classNameInput="checkbox"
                classNameWrapper="flex-1 mr-[3rem]"
              />
              <Checkbox
                label="Product"
                checked={isProductChecked}
                onChange={handleProductCheck}
                name="product"
                classNameLabel="relative text-secondary text-[2rem] flex justify-between w-full items-center cursor-pointer"
                classNameInput="checkbox"
                classNameWrapper="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
