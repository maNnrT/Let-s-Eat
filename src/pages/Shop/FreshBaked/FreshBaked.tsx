import * as React from 'react';
import heroBannerCategoryFreshBaked from '@/assets/image/HeroBanner_FreshBaked.png';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/feature/ProductsSlice';
import FreshBakedProduct from './FreshBakedProduct';
import ProductDetail from '@/pages/Shop/ProductDetail';
import freshBakedImg1 from '@/assets/image/image25.png';
import freshBakedImg2 from '@/assets/image/image18.png';
type product = {
  id: number | undefined;
  type: string;
  dish: string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
};
function FreshBaked() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<number | undefined>();
  const handleOpenModal = (id: number | undefined): void => {
    setSelectedItem(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();
  let products = useSelector(getProductsSelector);
  products = products.filter((product: product) => {
    return product.type === 'freshbaked';
  });
  // cần phải spread để tránh TypeError: Cannot assign to read only property '0' of object '[object Array]' in typescript
  const arrayProducts1 = [...products].reverse().slice(0, 4);
  const arrayProducts2 = [...products].reverse().slice(4, products.length);

  React.useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full mb-[-12rem]">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCategoryFreshBaked})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Fresh baked</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Shop/Category</p>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        {openModal && <ProductDetail id={selectedItem} onClose={handleCloseModal} />}
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          Fresh Baked!
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          Freshly baked bread. Natural, crusty, straight from the oven: our fresh bread. Always fresh? Of course! A wide
          choice?
        </p>
        <div className="container grid grid-cols-2 gap-x-[3.2rem] h-auto mt-[8.8rem] ">
          <div className="w-full pt-[1.6rem] flex flex-col items-end">
            <div className="w-[82.7%] h-[47.6rem] border-[1.5px] border-secondary p-[2rem] relative mt-[7.9rem]">
              <p className="font-fahkwang font-semibold text-[2.4rem] leading-[130%] text-center uppercase text-secondary absolute top-[-4.8rem] right-[50%] translate-x-[50%]">
                Fresh Baked
              </p>
              <div>
                {arrayProducts1.map((product) => (
                  <div key={product.id} onClick={() => handleOpenModal(product.id)} className="cursor-pointer">
                    <FreshBakedProduct
                      id={product.id}
                      name={product.name}
                      img={product.img}
                      ingredient={product.ingredient}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full  h-auto mt-[3.2rem] mb-[20.1rem] self-end mr-0">
              <img src={freshBakedImg1} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="w-full h-auto mb-[3.2rem]">
              <img src={freshBakedImg2} alt="" className="w-full" />
            </div>
            <div className="w-[82.7%] h-[70.2rem] border-[1.5px] border-secondary p-[2rem] overflow-y-auto scrollbar">
              <div className="w-full">
                {arrayProducts2.map((product) => (
                  <div key={product.id} onClick={() => handleOpenModal(product.id)} className="cursor-pointer">
                    <FreshBakedProduct
                      id={product.id}
                      name={product.name}
                      img={product.img}
                      ingredient={product.ingredient}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreshBaked;
