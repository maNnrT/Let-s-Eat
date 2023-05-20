import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Pagination from '@mui/material/Pagination';
interface Props {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
function Paginationn({ totalItems, itemsPerPage, setCurrentPage, currentPage }: Props) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <nav className=" text-secondary mt-[4rem]">
        <ul className="flex justify-center items-center">
          <li className="mr-[2rem]">
            <button
              className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center
                    focus:bg-secondary focus:text-[#F8F4F1] focus:duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <BsChevronLeft size={20} />
            </button>
          </li>
          {pages.map((page, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setCurrentPage(page);
                }}
                className="text-[2rem] p-[1rem]"
              >
                {page}
              </button>
            </li>
          ))}
          <li className="ml-[2rem]">
            <button
              className="w-[4rem] h-[4rem] bg-white text-[#B7B5B3] flex justify-center items-center
                    focus:bg-secondary focus:text-[#F8F4F1] focus:duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              onClick={() => {
                if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
                  console.log('vaoday');
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <BsChevronRight size={20} />
            </button>
          </li>
        </ul>
      </nav>
      <Pagination count={10} shape="rounded" showFirstButton showLastButton />
    </>
  );
}

export default Paginationn;
