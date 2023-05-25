import * as React from 'react';
import { Combo, Product } from '@/types/types';
import wait from '@/utils/wait';
const Items = React.lazy(() => wait(1000).then(() => import('./Items')));
import Pagination from '@/pages/Shop/SearchResult/ResultPaginate/Pagination';
import LoadingCard from '@/components/LoadingCard/LoadingCard';
interface Props {
  items: (Product | Combo)[];
}
function ResultPaginate({ items }: Props) {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage, setItemPerPage] = React.useState<number>(8);
  const currentData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, items]);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
        pageSize={itemsPerPage}
        siblingCount={1}
        totalCount={items.length}
      />
      <React.Suspense
        fallback={
          <div className="min-h-[41.2rem] grid grid-cols-12 gap-[1.6rem]">
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
            <div className="col-span-3">
              <LoadingCard />
            </div>
          </div>
        }
      >
        <Items currentItems={currentData} />
      </React.Suspense>
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
