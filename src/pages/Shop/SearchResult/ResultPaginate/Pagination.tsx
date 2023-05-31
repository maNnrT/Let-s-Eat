import { usePagination, DOTS } from '../../../../hooks/usePagination';
import * as React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
interface Props {
  onPageChange: any;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}
const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }: Props) => {
  const refPrev = React.useRef<HTMLButtonElement>(null);
  const refNext = React.useRef<HTMLButtonElement>(null);
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // React.useEffect(() => {
  //   onPageChange(1);
  // }, [totalCount]);
  if (paginationRange) {
    const lastPage = paginationRange[paginationRange.length - 1];
    // if (currentPage === 0 || paginationRange.length < 2) {
    //   return null;
    // }

    if (refPrev.current) {
      if (currentPage === 1) {
        refPrev.current.disabled = true;
      } else {
        refPrev.current.disabled = false;
      }
    }
    if (refNext.current) {
      if (currentPage === lastPage) {
        refNext.current.disabled = true;
      } else {
        refNext.current.disabled = false;
      }
    }
    const onNext = () => {
      if (currentPage < Math.ceil(totalCount / pageSize)) onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    };
    return (
      <div className="text-secondary desktop:my-[3rem] my-[2rem]  ">
        <ul className="flex justify-center items-center">
          <li className="desktop:mr-[2rem] mr-[1rem] tablet:mr-[1.5rem] ">
            <button className="paginationBtn desktop:w-[4rem] w-[2rem] tablet:w-[3rem] desktop:h-[4rem] h-[2rem] tablet:h-[3rem]" ref={refPrev} onClick={onPrevious}>
              <BsChevronLeft size={20}  />
            </button>
          </li>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li key={Math.random()} className="desktop:text-[2rem] p-[1rem] cursor-default">
                  &#8230;
                </li>
              );
            } else {
              return (
                <li key={pageNumber} className="flex justify-center items-center">
                  {pageNumber !== currentPage ? (
                    <button
                      className="desktop:text-[2rem] desktop:w-[4rem] w-[2rem] tablet:w-[3rem] desktop:h-[4rem] h-[2rem] tablet:h-[3rem] cursor-pointer desktop:mx-[2rem] mx-[0.5rem] "
                      onClick={() => onPageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ) : (
                    <button
                      className="desktop:text-[2rem] desktop:w-[4rem] w-[2rem] tablet:w-[3rem] desktop:h-[4rem] h-[2rem] tablet:h-[3rem] cursor-pointer bg-secondary text-white desktop:mx-[2rem] mx-[0.5rem] duration-200"
                      onClick={() => onPageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )}
                </li>
              );
            }
          })}
          <li className="desktop:ml-[2rem] ml-[1rem]">
            <button className="paginationBtn desktop:w-[4rem] w-[2rem] tablet:w-[3rem] desktop:h-[4rem] h-[2rem] tablet:h-[3rem]" onClick={onNext} ref={refNext}>
              <BsChevronRight size={20} />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
