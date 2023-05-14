import React from 'react';
import { IoMdCloseCircle, IoMdSearch } from 'react-icons/io';
import { ImSpinner8 } from 'react-icons/im';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Tippy from '@tippyjs/react/headless';
import PopperItem from '@/components/Popper/PopperItem/PopperItem';

function Search() {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [searchResult, setSearchResult] = React.useState<number[]>([]);
  const [showResult, setShowResult] = React.useState<boolean>(true);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setSearchResult([1]);
    }, 3000);
  }, []);
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([])
    inputRef.current?.focus();
  };
  return (
    <Tippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div tabIndex={-1} {...attrs} className="w-[30rem]">
          <PopperWrapper>
            <p className="text-secondary ml-[1rem] capitalize">dish</p>
            <PopperItem />
            <PopperItem />
            <PopperItem />
            <PopperItem />
            <p className="text-secondary ml-[1rem] capitalize">category</p>
            <PopperItem />
            <PopperItem />
            <PopperItem />
            <PopperItem />
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
          onChange={(e) => setSearchValue(e.target.value)}
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
  );
}

export default Search;
