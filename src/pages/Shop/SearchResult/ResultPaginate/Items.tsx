import { Combo, Product } from '@/types/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import ComboCard from '@/components/ComboCard/ComboCard';
import { BsCart } from 'react-icons/bs';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props {
  currentItems: (Product | Combo)[];
}
function Items({ currentItems }: Props) {
  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <div className="grid grid-cols-12 gap-[1.6rem]" ref={parent}>
      {currentItems.length > 0 ? (
        currentItems.map((item) => {
          if (item.description !== undefined && item.price !== undefined) {
            return (
              <div className="col-span-12 tablet:col-span-6 desktop:col-span-3  flex justify-center" key={currentItems.indexOf(item)}>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  description={item.description}
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
              <div className=" col-span-12 tablet:col-span-6 desktop:col-span-3 flex justify-center" key={currentItems.indexOf(item)}>
                <ComboCard
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  dishes={item.dishes}
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
