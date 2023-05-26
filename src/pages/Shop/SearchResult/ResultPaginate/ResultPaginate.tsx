import * as React from 'react';
import { Combo, Product } from '@/types/types';
import wait from '@/utils/wait';
const Items = React.lazy(() => wait(1000).then(() => import('./Items')));
import Pagination from '@/pages/Shop/SearchResult/ResultPaginate/Pagination';
import LoadingCard from '@/components/LoadingCard/LoadingCard';
import { useLocation, useSearchParams } from 'react-router-dom';
interface Props {
  items: (Product | Combo)[];
}
function ResultPaginate({ items }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // React.useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  // }, [location]);
  const [currentPage, setCurrentPage] = React.useState<number>(Number(Object.fromEntries([...searchParams]).page));
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
        onPageChange={(page: number) => {
          setCurrentPage(page);
          searchParams.set('page', page.toString());
          setSearchParams(searchParams);
        }}
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
        onPageChange={(page: number) => {
          setCurrentPage(page);
          searchParams.set('page', page.toString());
          setSearchParams(searchParams);
        }}
        pageSize={itemsPerPage}
        siblingCount={1}
        totalCount={items.length}
      />
    </div>
  );
}

export default ResultPaginate;
