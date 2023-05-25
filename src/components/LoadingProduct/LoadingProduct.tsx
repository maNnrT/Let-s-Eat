import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function LoadingProduct() {
  return (
    <div className="flex justify-start items-center h-[10rem] mb-[1.2rem] ">
      <div className="w-[10rem] h-[10rem] basis-[10rem] grow-0 shrink-0 relative group ">
        <Skeleton width="10rem" height="10rem" />
      </div>
      <div className=" w-full h-full ml-[1.6rem] ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

export default LoadingProduct;
