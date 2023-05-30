import * as React from 'react';
import heroBannerCategoryFreshBaked from '@/assets/image/HeroBanner_FreshBaked.png';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
// import CategoryProduct from './CategoryProduct';
import freshBakedImg1 from '@/assets/image/image25.png';
import freshBakedImg2 from '@/assets/image/image18.png';
import { Product } from '@/types/types';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import wait from '@/utils/wait';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingProduct from '@/components/LoadingProduct/LoadingProduct';
// import CategoryProductList from './CategoryProductList/CategoryProductList';
const CategoryProductList = React.lazy(() =>
  wait(1000).then(() => import('./CategoryProductList/CategoryProductList')),
);
interface Props {
  category: string;
  description: string;
}
function Category({ category, description }: Props) {
  const dispatch = useDispatch();
  let products = useSelector(getProductsSelector);
  products = products.filter((product: Product) => {
    return product.type === category;
  });
  // cần phải spread để tránh TypeError: Cannot assign to read only property '0' of object '[object Array]' in typescript
  const arrayProducts1 = [...products].reverse().slice(0, 4);
  const arrayProducts2 = [...products].reverse().slice(4, products.length);

  React.useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let newName = category;
  if (category.includes('-')) {
    newName = category.replace('-', ' ');
  } else if (category.includes('&')) {
    newName = category.replace('&', ' & ');
  }
  return (
    <div className="w-full desktop:mb-[-12rem]">
      <div
        className="w-full desktop:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCategoryFreshBaked})` }}
      >
        <p className="font-fahkwang desktop:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] desktop:mb-0 first-letter:capitalize">
          {newName}
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] desktop:mb-0 mb-[2.4rem]">
        <div className="container">
          <div className=" flex flex-col desktop:items-center desktop:pt-[6rem] pt-[2.4rem]  ">
            <div className="desktop:flex flex-col">
              <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                our menu
              </p>
            </div>
            <h1
              className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] 
              desktop:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
              uppercase mb-0 desktop:text-center "
            >
              {newName}
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] 
              mt-[1.2rem] desktop:text-center max-w-[59.4rem] desktop:line-clamp-3 line-clamp-5"
            >
              {description}
            </p>
          </div>
          <div className="grid desktop:grid-cols-2 grid-cols-1 gap-x-[3.2rem] h-auto desktop:mt-[8.8rem] mt-[1.2rem]">
            <div className="w-full talblet:pt-[1.6rem] flex flex-col items-end">
              <div className="w-[82.7%] h-[47.6rem]  border-[1.5px] border-secondary p-[2rem] relative mt-[7.9rem] hidden desktop:block">
                <p className="font-fahkwang font-semibold text-[2.4rem] leading-[130%] text-center uppercase text-secondary absolute top-[-4.8rem] right-[50%] translate-x-[50%]">
                  {newName}
                </p>
                <React.Suspense
                  fallback={
                    <div className="flex flex-col h-full">
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                    </div>
                  }
                >
                  <CategoryProductList products={products} arrayProducts={arrayProducts1} newName={newName} />
                </React.Suspense>
              </div>
              <div className="w-full h-auto mt-[3.2rem] mb-[20.1rem] self-end mr-0 hidden desktop:block">
                <LazyLoadImage src={freshBakedImg1} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-full  flex-col items-start hidden desktop:flex">
              <div className="w-full h-auto mb-[3.2rem]">
                <LazyLoadImage src={freshBakedImg2} alt="" className="w-full" />
              </div>
              <div className="w-[82.7%] h-[70.2rem] border-[1.5px] border-secondary p-[2rem] overflow-y-auto scrollbar">
                <React.Suspense
                  fallback={
                    <div className="flex flex-col h-full">
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                      <LoadingProduct />
                    </div>
                  }
                >
                  <CategoryProductList products={products} arrayProducts={arrayProducts2} newName={newName} />
                </React.Suspense>
              </div>
            </div>
            <div className="border-[1.5px] border-secondary pt-[0.8rem] px-[0.8rem] block desktop:hidden">
              <React.Suspense
                fallback={
                  <div className="flex flex-col h-full">
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                  </div>
                }
              >
                <CategoryProductList products={products} arrayProducts={products} newName={newName} />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
