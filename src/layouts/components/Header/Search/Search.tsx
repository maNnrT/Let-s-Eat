import * as React from 'react';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import { ImSpinner8 } from 'react-icons/im';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import SearchDishItem from '@/components/Popper/SearchDishItem/SearchDishItem';
import { useSelector } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';
import { Product } from '@/types/types';
import useDebounce from '@/hooks/useDebounce';
import SearchTypeItem from '@/components/Popper/SearchTypeItem/SearchTypeItem';

function Search() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchDishResult, setSearchDishResult] = React.useState<Product[]>([]);
  const [searchTypeResult, setSearchTypeResult] = React.useState<string[]>([]);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const products: Product[] = useSelector(getProductsSelector);
  const debouncedSearchValue: string = useDebounce<string>(searchValue, 500);
  const [isSearchValueEmpty, setIsSearchValueEmpty] = React.useState<boolean>(true);
  const [isSearchResultEmpty, setIsSearchResultEmpty] = React.useState<boolean>(false);
  React.useEffect(() => {
    const types = ['fresh-baked', 'cookies', 'coffee&tea', 'chessecake'];
    if (searchValue === '') {
      setSearchDishResult([]);
      setIsSearchValueEmpty(true);
      setIsSearchResultEmpty(false);
    } else if (
      products.filter((product) => {
        return product.name.trim().toLowerCase().includes(searchValue);
      }).length === 0
    ) {
      setSearchDishResult([]);
      setIsSearchResultEmpty(true);
      setIsSearchValueEmpty(false);
    } else if (
      products.filter((product) => {
        return product.name.trim().toLowerCase().includes(searchValue);
      }).length !== 0
    ) {
      setSearchDishResult(
        products.filter((product) => {
          return product.name.trim().toLowerCase().includes(searchValue);
        }),
      );
      setIsSearchValueEmpty(false);
      setIsSearchResultEmpty(false);
    }

    
    if (searchValue === '') {
      setSearchTypeResult([]);
      setIsSearchValueEmpty(true);
      setIsSearchResultEmpty(false);
    } else if (
      types.filter((type) => {
        return type.trim().toLowerCase().includes(searchValue);
      }).length === 0
    ) {
      setSearchTypeResult([]);
      setIsSearchResultEmpty(true);
      setIsSearchValueEmpty(false);
    } else if (
      types.filter((type) => {
        return type.trim().toLowerCase().includes(searchValue);
      }).length !== 0
    ) {
      setSearchTypeResult(
        types.filter((type) => {
          return type.trim().toLowerCase().includes(searchValue);
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
  return (
    <>
      <Tippy
        visible={showResult}
        interactive
        render={(attrs) => (
          <div tabIndex={-1} {...attrs} className="w-[30rem]">
            <PopperWrapper>
              {searchDishResult.length > 0
                ? searchDishResult.map((result) => (
                    <SearchDishItem key={result.id} id={result.id} name={result.name}  />
                  ))
                : null}
              {searchTypeResult.length > 0
                ? searchTypeResult.map((result) => (
                    <SearchTypeItem key={searchTypeResult.indexOf(result)} name={result} />
                  ))
                : null}
              {isSearchValueEmpty && searchDishResult.length === 0 && searchTypeResult.length === 0 ? (
                <p className="text-secondary py-[0.8rem] px-[2rem]">Type in dish's name or category</p>
              ) : null}
              {isSearchResultEmpty && searchDishResult.length === 0 && searchTypeResult.length === 0 ? (
                <p className="text-secondary py-[0.8rem] px-[2rem]">No dish or category found</p>
              ) : null}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="flex items-center h-[4rem] bg-white rounded-full relative ml-[2rem] mr-[3rem] w-[30rem]">
          <span className="w-[3.5rem] h-full flex justify-center items-center">
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
            className="text-primary h-full outline-none mr-[2rem] flex-1 pr-[2rem] py-[0.7rem] placeholder:text-gray-500 text-[1.4rem]"
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
