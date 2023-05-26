import * as React from 'react';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import { ImSpinner8 } from 'react-icons/im';
import config from '@/config';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
// import { setSearchValue } from '@/redux/features/search/searchSlice';
interface Props {
  handleNav: ()=> void
}
function Search({handleNav}:Props) {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };
  return (
    <>
      <div className="flex items-center h-[4rem] bg-white  relative w-full tablet:hidden mb-[2rem]">
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
        />
        {!!searchValue && (
          <button
            className="absolute top-[50%] translate-y-[-50%] right-[3.5rem]  "
            onClick={handleClear}
          >
            <IoMdCloseCircle size={19} color={'#D08C30'} />
          </button>
        )}
        {/* <div className="absolute top-[50%] translate-y-[-50%] right-[1.5rem]">
            <ImSpinner8 color={'#D08C30'} />
          </div> */}
        <button
          className="w-[4rem] h-full flex justify-center items-center hover:bg-gray-100"
          onClick={() => {
            navigate({
              pathname: config.routes.search,
              search: `?${createSearchParams({
                keyword: searchValue,
              })}`,
            });
            handleNav()
          }}
        >
          <IoMdSearch size={20} color={'#D08C30'} />
        </button>
      </div>
    </>
  );
}

export default Search;
