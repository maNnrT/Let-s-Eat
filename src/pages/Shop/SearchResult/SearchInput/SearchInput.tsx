import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import { searchFilterChange } from '@/redux/features/filter/filterSlice';

function SearchInput() {
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [searchValue, setSearchValue] = React.useState(keyword !== null ? keyword : '');
  const handleSearch = (): void => {
    searchParams.set('keyword', searchValue);
    searchParams.set('page', "1");
    setSearchParams(searchParams);
  };
  const handleClear = () => {
    setSearchValue('');
    searchParams.set('keyword', '');
    searchParams.set('page', "1");
    setSearchParams(searchParams);
    inputRef.current?.focus();
  };
  // React.useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  // }, [dispatch, searchParams, setSearchParams]);
  React.useEffect(() => {
    dispatch(searchFilterChange(keyword));
  }, [dispatch, keyword]);
  return (
    <div
      className="flex items-center h-[4rem] bg-white relative desktop:ml-[2rem] desktop:mr-[3rem] desktop:w-[30rem] pl-[1.5rem]
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
  );
}

export default SearchInput;
