import { Product } from '@/types/types';
import ProductCard from '@/components/ProductCard/ProductCard';

interface Props {
  currentItems: Product[];
}
function Items({ currentItems }: Props) {
  return (
    <div className="grid grid-cols-12 gap-[1.6rem]">
      {currentItems &&
        currentItems.map((item) => (
          <div
            className=" col-span-3 w-full h-fit bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
            key={item.id}
          >
            <ProductCard
              id={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              key={item.id}
              price={item.price}
            />
          </div>
        ))}
    </div>
  );
}

export default Items;
