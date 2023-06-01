import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function LoadingProduct() {
  return (
    <div className="flex justify-start items-center desktop:h-[10rem] h-[5rem] desktop:mb-[1.2rem] mb-[0.8rem] ">
      <div className="w-[10rem] h-[10rem] basis-[10rem] grow-0 shrink-0 relative group hidden desktop:block ">
        <Skeleton width="10rem" height="10rem" />
      </div>
      <div className=" w-full h-full ml-[1.6rem] hidden desktop:block ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className="w-[5rem] h-[5rem] basis-[5rem] grow-0 shrink-0 relative group block desktop:hidden ">
        <Skeleton width="5rem" height="5rem" />
      </div>
      <div className=" w-full h-full ml-[1.6rem] desktop:hidden block ">
        <Skeleton />
      </div>
    </div>
  );
}

export default LoadingProduct;
