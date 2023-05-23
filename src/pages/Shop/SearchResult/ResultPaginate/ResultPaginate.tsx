import * as React from 'react';
import { Combo, Product } from '@/types/types';
import { useSelector } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';

import Items from './Items';
import Paginationn from './Pagination';
import Pagination from '@/hooks/Pagination';
interface Props {
  items:(Product|Combo)[]
}
function ResultPaginate({items }:Props) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemPerPage] = React.useState<number>(8);
  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;
  // const currentItems = products.slice(firstItemIndex, lastItemIndex);
  const currentData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage,items]);
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
        totalCount={items.length}
      />
      <Items currentItems={currentData} />
      <Pagination
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        pageSize={itemsPerPage}
        siblingCount={1}
        totalCount={items.length}
      />
    </div>
  );
}

export default ResultPaginate;
