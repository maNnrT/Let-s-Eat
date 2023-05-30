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
  const w = screen.width;

  const [showPaginate, setShowPaginate] = React.useState<boolean>(true);

  React.useMemo(() => {
    if (w < 1280) {
      setShowPaginate(false);
    } else {
      setShowPaginate(true);
    }

    if (w <= 768) {
      setItemPerPage(1);
    } else if (w > 768 && w < 1280) {
      setItemPerPage(2);
    } else if (w >= 1280) {
      setItemPerPage(8);
    }
  }, [w]);
  return (
    <div>
      {showPaginate && (
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
      )}
      <React.Suspense
        fallback={
          <div>
            <div className="min-h-[41.2rem] grid grid-cols-12 gap-[1.6rem] ">
              <div className="col-span-12 flex justify-center tablet:hidden">
                <LoadingCard />
              </div>
              <div className="col-span-6 hidden desktop:hidden tablet:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-6 hidden desktop:hidden tablet:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
              <div className="col-span-3 hidden desktop:flex justify-center">
                <LoadingCard />
              </div>
            </div>
            {/* <div className="min-h-[41.2rem] grid grid-cols-12 gap-[1.6rem]">
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3">
                <LoadingCard />
              </div>
            </div> */}
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
