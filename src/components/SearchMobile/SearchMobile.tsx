import * as React from 'react';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import config from '@/config';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { PriceOrderValue } from '@/enum/enum';
// import { setSearchValue } from '@/redux/features/search/searchSlice';
interface Props {
  handleNav: () => void;
}
function Search({ handleNav }: Props) {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSeeAllResult();
    }
  };
  const handleSeeAllResult = () => {
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
    handleNav();
  };
  return (
    <>
      <div className="flex items-center h-[4rem] bg-white  relative w-full desktop:hidden mb-[1.2rem]">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          ref={inputRef}
          placeholder="Search"
          className="text-primary h-fit outline-none ml-[1rem] w-full pr-[3rem] py-[0.7rem] placeholder:text-gray-500 text-[1.4rem] "
          spellCheck={false}
          onKeyDown={handleKeyDown}
        />
        {!!searchValue && (
          <button className="absolute top-[50%] translate-y-[-50%] right-[3.5rem]  " onClick={handleClear}>
            <IoMdCloseCircle size={19} color={'#D08C30'} />
          </button>
        )}
        {/* <div className="absolute top-[50%] translate-y-[-50%] right-[1.5rem]">
            <ImSpinner8 color={'#D08C30'} />
          </div> */}
        <button
          className="w-[4rem] h-full flex justify-center items-center hover:bg-gray-100"
          onClick={handleSeeAllResult}
        >
          <IoMdSearch size={20} color={'#D08C30'} />
        </button>
      </div>
    </>
  );
}

export default Search;
