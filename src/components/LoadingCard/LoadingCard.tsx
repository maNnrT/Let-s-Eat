import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function LoadingCard() {
  return (
    <div className="tablet:w-full w-[22rem] h-[41.2rem] bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)] ">
      <Skeleton className="w-full h-[26.1rem] overflow-hidden" />
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full">
        <Skeleton />
        <Skeleton count={2} />
        <div className="mt-[1rem] self-end w-full mb-[0.8rem]">
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
