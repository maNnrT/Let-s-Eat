import { usePagination, DOTS } from './usePagination';
import classnames from 'classnames';
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
  React.useEffect(() => {onPageChange(1)}, [totalCount]);
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
      <div className="text-secondary mt-[4rem] mb-[4rem]">
        <ul className="flex justify-center items-center">
          <li className="mr-[2rem]">
            <button className="paginationBtn" ref={refPrev} onClick={onPrevious}>
              <BsChevronLeft size={20} />
            </button>
          </li>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li key={Math.random()} className="text-[2rem] p-[1rem] cursor-default">
                  &#8230;
                </li>
              );
            } else {
              return (
                <li key={pageNumber} className="flex justify-center items-center">
                  {pageNumber !== currentPage ? (
                    <button
                      className="text-[2rem]  w-[4rem] h-[4rem] cursor-pointer mx-[2rem] "
                      onClick={() => onPageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ) : (
                    <button
                      className="text-[2rem] w-[4rem] h-[4rem] cursor-pointer bg-secondary text-white mx-[2rem] duration-200"
                      onClick={() => onPageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )}
                </li>
              );
            }
          })}
          <li className="ml-[2rem]">
            <button className="paginationBtn" onClick={onNext} ref={refNext}>
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
