import * as React from 'react';
import heroBannerCategoryFreshBaked from '@/assets/image/HeroBanner_FreshBaked.png';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
import CategoryProduct from './CategoryProduct';
import freshBakedImg1 from '@/assets/image/image25.png';
import freshBakedImg2 from '@/assets/image/image18.png';
import { Product } from '@/types/types';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { setOpenProductDetailModal } from '@/redux/features/modalSlice/modalSlice';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    <div className="w-full mb-[-12rem]">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCategoryFreshBaked})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium first-letter:capitalize">
          {newName}
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          {newName}!
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">{description}</p>
        <div className="container grid grid-cols-2 gap-x-[3.2rem] h-auto mt-[8.8rem] ">
          <div className="w-full pt-[1.6rem] flex flex-col items-end">
            <div className="w-[82.7%] h-[47.6rem] border-[1.5px] border-secondary p-[2rem] relative mt-[7.9rem]">
              <p className="font-fahkwang font-semibold text-[2.4rem] leading-[130%] text-center uppercase text-secondary absolute top-[-4.8rem] right-[50%] translate-x-[50%]">
                {newName}
              </p>
              <div className="flex flex-col h-full">
                {products.length > 0 ? (
                  arrayProducts1.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => dispatch(setOpenProductDetailModal(product.id))}
                      className="cursor-pointer w-full"
                    >
                      <CategoryProduct
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        ingredient={product.ingredient}
                        price={product.price}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-secondary text-center text-[2rem] first-letter:capitalize">{newName} is out!</p>
                    <Link to="/shop" className="btn-secondary uppercase">
                      go to shop
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full  h-auto mt-[3.2rem] mb-[20.1rem] self-end mr-0">
              <LazyLoadImage src={freshBakedImg1} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-auto mb-[3.2rem]">
              <LazyLoadImage src={freshBakedImg2} alt="" className="w-full" />
            </div>
            <div className="w-[82.7%] h-[70.2rem] border-[1.5px] border-secondary p-[2rem] overflow-y-auto scrollbar">
              <div className="flex flex-col w-full h-full">
                {products.length > 0 ? (
                  arrayProducts2.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => dispatch(setOpenProductDetailModal(product.id))}
                      className="cursor-pointer w-full"
                    >
                      <CategoryProduct
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        ingredient={product.ingredient}
                        price={product.price}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-secondary text-center text-[2rem] first-letter:capitalize">{newName} is out!</p>
                    <Link to="/shop" className="btn-secondary uppercase">
                      go to shop
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
