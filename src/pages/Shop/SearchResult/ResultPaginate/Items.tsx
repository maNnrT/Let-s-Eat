import * as React from 'react';
import { Combo, Product } from '@/types/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import ComboCard from '@/components/ComboCard/ComboCard';
import { BsCart } from 'react-icons/bs';

interface Props {
  currentItems: (Product | Combo)[];
}
function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
function Items({ currentItems }: Props) {
  return (
    <div className="grid grid-cols-12 gap-[1.6rem]" key={currentItems.length}>
      {currentItems.length > 0 ? (
        currentItems.map((item) => {
          if (item.description !== undefined && item.price !== undefined) {
            return (
              <div className="col-span-3" key={currentItems.indexOf(item)}>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                  key={currentItems.indexOf(item)}
                  price={item.price}
                />
              </div>
            );
          } else if (
            item.description === undefined &&
            item.price === undefined &&
            item.dishes !== undefined &&
            item.numberPeople !== undefined
          ) {
            return (
              <div className="col-span-3" key={currentItems.indexOf(item)}>
                <ComboCard
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  dishes={item.dishes}
                  key={currentItems.indexOf(item)}
                  numberPeople={item.numberPeople}
                />
              </div>
            );
          }
        })
      ) : (
        <div className=" col-span-12 w-full h-[41.2rem] flex flex-col justify-center items-center">
          <BsCart color="#D08C30" size={60} />
          <p className="text-secondary text-center text-[2rem] first-letter:capitalize mt-[2rem]">No product match!</p>
        </div>
      )}
    </div>
  );
}

export default Items;
