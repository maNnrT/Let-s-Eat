import * as React from 'react';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
// import { ImSpinner8 } from 'react-icons/im';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import SearchDishItem from '@/components/Popper/SearchDishItem/SearchDishItem';
import { useAppSelector } from '@/hooks/reduxHooks';
import { getCombosSelector, getProductsSelector } from '@/redux/selectors';
import { Combo, Product } from '@/types/types';
import useDebounce from '@/hooks/useDebounce';
import SearchTypeItem from '@/components/Popper/SearchTypeItem/SearchTypeItem';
import useScrollDirection from '@/hooks/useScrollDirection';
import config from '@/config';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { PriceOrderValue } from '@/enum/enum';
// import { setSearchValue } from '@/redux/features/search/searchSlice';

function Search() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const navigate = useNavigate();
  const [searchDishResult, setSearchDishResult] = React.useState<Product[]>([]);
  const [searchComboResult, setSearchComboResult] = React.useState<Combo[]>([]);
  const [searchTypeResult, setSearchTypeResult] = React.useState<string[]>([]);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const products: Product[] = useAppSelector(getProductsSelector);
  const combos: Combo[] = useAppSelector(getCombosSelector);
  const debouncedSearchValue: string = useDebounce<string>(searchValue, 500);
  const [isSearchValueEmpty, setIsSearchValueEmpty] = React.useState<boolean>(true);
  const [isSearchResultEmpty, setIsSearchResultEmpty] = React.useState<boolean>(false);
  const [scrollDirection] = useScrollDirection();
  // console.log(searchDishResult);
  const types = ['fresh-baked', 'cookies', 'coffee&tea', 'chessecake'];
  React.useEffect(() => {
    if (debouncedSearchValue === '') {
      setSearchDishResult([]);
      setIsSearchValueEmpty(true);
      setIsSearchResultEmpty(false);
    } else if (
      products.filter((product) => {
        return product.name.trim().toLowerCase().includes(debouncedSearchValue);
      }).length === 0
    ) {
      setSearchDishResult([]);
      setIsSearchResultEmpty(true);
      setIsSearchValueEmpty(false);
    } else if (
      products.filter((product) => {
        return product.name.trim().toLowerCase().includes(debouncedSearchValue);
      }).length !== 0
    ) {
      setSearchDishResult(
        products.filter((product) => {
          return product.name.trim().toLowerCase().includes(debouncedSearchValue);
        }),
      );
      setIsSearchValueEmpty(false);
      setIsSearchResultEmpty(false);
    }

    if (debouncedSearchValue === '') {
      setSearchComboResult([]);
      setIsSearchValueEmpty(true);
      setIsSearchResultEmpty(false);
    } else if (
      combos.filter((combo) => {
        return combo.name.trim().toLowerCase().includes(debouncedSearchValue);
      }).length === 0
    ) {
      setSearchComboResult([]);
      setIsSearchResultEmpty(true);
      setIsSearchValueEmpty(false);
    } else if (
      combos.filter((combo) => {
        return combo.name.trim().toLowerCase().includes(debouncedSearchValue);
      }).length !== 0
    ) {
      setSearchComboResult(
        combos.filter((combo) => {
          return combo.name.trim().toLowerCase().includes(debouncedSearchValue);
        }),
      );
      setIsSearchValueEmpty(false);
      setIsSearchResultEmpty(false);
    }

    if (debouncedSearchValue === '') {
      setSearchTypeResult([]);
      setIsSearchValueEmpty(true);
      setIsSearchResultEmpty(false);
    } else if (
      types.filter((type) => {
        return type.trim().toLowerCase().includes(debouncedSearchValue);
      }).length === 0
    ) {
      setSearchTypeResult([]);
      setIsSearchResultEmpty(true);
      setIsSearchValueEmpty(false);
    } else if (
      types.filter((type) => {
        return type.trim().toLowerCase().includes(debouncedSearchValue);
      }).length !== 0
    ) {
      setSearchTypeResult(
        types.filter((type) => {
          return type.trim().toLowerCase().includes(debouncedSearchValue);
        }),
      );
      setIsSearchValueEmpty(false);
      setIsSearchResultEmpty(false);
    }
  }, [debouncedSearchValue]);
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue('');
    setSearchDishResult([]);
    setIsSearchValueEmpty(true);
    setIsSearchResultEmpty(false);
    inputRef.current?.focus();
  };
  React.useEffect(() => {
    if (scrollDirection === 'down') {
      setShowResult(false);
      inputRef.current?.blur();
    }
  }, [scrollDirection]);
  return (
    <>
      <Tippy
        visible={showResult}
        interactive
        animation="scale-subtle"
        content={
          <div className="w-[30rem]">
            <PopperWrapper>
              {searchDishResult.length > 0 ? (
                <>
                  <p className="text-secondary ml-[2rem]">Dish</p>
                  {searchDishResult.slice(0, 3).map((result) => (
                    <div onClick={() => setShowResult(false)} key={result.id}>
                      <SearchDishItem id={result.id} name={result.name} />
                    </div>
                  ))}
                </>
              ) : null}
              {searchComboResult.length > 0 ? (
                <>
                  <p className="text-secondary ml-[2rem]">Combo</p>
                  {searchComboResult.slice(0, 3).map((result) => (
                    <div onClick={() => setShowResult(false)} key={result.id}>
                      <SearchTypeItem id={result.id} name={result.name} />
                    </div>
                  ))}
                </>
              ) : null}
              {searchTypeResult.length > 0 ? (
                <>
                  <p className="text-secondary ml-[2rem]">Category</p>
                  {searchTypeResult.slice(0, 3).map((result) => (
                    <div onClick={() => setShowResult(false)} key={searchTypeResult.indexOf(result)}>
                      <SearchTypeItem name={result} />
                    </div>
                  ))}
                </>
              ) : null}
              {isSearchValueEmpty &&
              searchDishResult.length === 0 &&
              searchTypeResult.length === 0 &&
              searchComboResult.length === 0 ? (
                <p className="text-secondary py-[0.8rem] px-[2rem]">Type in dish's name, category or combo</p>
              ) : null}
              {isSearchResultEmpty &&
              searchDishResult.length === 0 &&
              searchTypeResult.length === 0 &&
              searchComboResult.length === 0 ? (
                <p className="text-secondary py-[0.8rem] px-[2rem]">No dish,category or combo found</p>
              ) : null}
              {searchDishResult.length !== 0 || searchTypeResult.length !== 0 || searchComboResult.length !== 0 ? (
                <button
                  className="text-secondary py-[0.8rem] px-[2rem] text-center cursor-pointer w-full"
                  onClick={() => {
                    setShowResult(false);
                    navigate({
                      pathname: config.routes.search,
                      search: `?${createSearchParams({
                        keyword: searchValue,
                        page: '1',
                        type: 'all',
                        combo: 'false',
                        product: 'false',
                        order: PriceOrderValue.DEFAULT.toString(),
                        price: '0,50',
                      })}`,
                    });
                  }}
                >
                  See all result
                </button>
              ) : null}
            </PopperWrapper>
          </div>
        }
        onClickOutside={handleHideResult}
      >
        <div className="hidden items-center h-[4rem] bg-white rounded-full relative w-[30rem] desktop:flex">
          <span className="w-[3.5rem] h-fit flex justify-center items-center">
            <IoMdSearch size={20} color={'#D08C30'} />
          </span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            ref={inputRef}
            placeholder="Search dish or category"
            className="text-primary h-fit outline-none mr-[2rem] flex-1 pr-[2rem] py-[0.7rem] placeholder:text-gray-500 text-[1.4rem"
            spellCheck={false}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className="absolute top-[50%] translate-y-[-50%] right-[1.5rem]" onClick={handleClear}>
              <IoMdCloseCircle size={19} color={'#D08C30'} />
            </button>
          )}
          {/* <div className="absolute top-[50%] translate-y-[-50%] right-[1.5rem]">
            <ImSpinner8 color={'#D08C30'} />
          </div> */}
        </div>
      </Tippy>
    </>
  );
}

export default Search;
