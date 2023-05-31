import * as React from 'react';
import heroBannerCategory from '@/assets/image/HeroBanner_Category.png';
import { CiSliderHorizontal } from 'react-icons/ci';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';

import 'tippy.js/animations/scale-subtle.css';

import ResultPaginate from './ResultPaginate/ResultPaginate';
import SearchInput from './SearchInput/SearchInput';
import TypeFilter from './TypeFilter/TypeFilter';
import PriceSlider from './PriceSlider/PriceSlider';
import CheckboxFilter from './CheckboxFilter/CheckboxFilter';
import PriceOrderMobile from './PriceOrderMobile/PriceOrderMobile';
import PriceOrder from './PriceOrder/PriceOrder';

function SearchResult() {
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
  const w = screen.width;
  React.useEffect(() => {
    if (w >= 1280) window.scrollTo(0, 700);
  }, []);

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
            <TypeFilter name='typeFilter1' />
            {/* Price Slider */}
            <PriceSlider />
            {/* Check Combo,Product */}
            <CheckboxFilter />
          </div>
          <div className="h-fit flex flex-col gap-y-[3.2rem] justify-start col-span-2 desktop:col-span-1">
            <div
              className="h-[8rem] pt-[2rem] px-[3rem] pb-[2rem] justify-between items-center bg-white 
            shadow-[0px_147px_183px_rgba(0,0,0,0.07)] desktop:flex hidden "
            >
              <div className="flex justify-between items-center">
                <p className="text-666565 text-[2rem]">Order by</p>
                {/* Price Order */}
                <PriceOrder/>
              </div>

              {/* Search */}
              <SearchInput />
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
              <ResultPaginate />
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
            <SearchInput />
            <p className="text-secondary mt-[1.2rem]">Filter</p>

            <p className="text-secondary font-semibold mt-[1.2rem]">Category</p>
            <TypeFilter name='typeFilter2' />
            <p className="text-secondary font-semibold mt-[1.2rem]">Price</p>
            <PriceSlider />
            <div className="pb-[1.2rem] border-b-[1px] border-secondary">
              <PriceOrderMobile />
            </div>
            <CheckboxFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
