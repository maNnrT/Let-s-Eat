import * as React from 'react';
import { Product } from '@/types/types';
import { useSelector } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';

import Items from './Items';
import Paginationn from './Pagination';
import Pagination from '@/hooks/Pagination';
interface Props {
  products:Product[]
}
function ResultPaginate({ products }:Props) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemPerPage] = React.useState<number>(8);
  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;
  // const currentItems = products.slice(firstItemIndex, lastItemIndex);

  const currentData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products, itemsPerPage]);
  return (
    <div>
      {/* <Items currentItems={currentItems} />
      <Paginationn
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
      <Pagination
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        pageSize={itemsPerPage}
        siblingCount={1}
        totalCount={products.length}
      />
      <Items currentItems={currentData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        pageSize={itemsPerPage}
        siblingCount={1}
        totalCount={products.length}
      />
    </div>
  );
}

export default ResultPaginate;
