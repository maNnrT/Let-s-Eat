import { Product } from '@/types/types';
import CategoryProduct from '../CategoryProduct/CategoryProduct';
import { setOpenProductDetailTrue } from '@/redux/features/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '@/config';
interface Props {
  products: Product[];
  arrayProducts: Product[];
  newName: string;
}
function CategoryProductList({ products, arrayProducts,newName }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-full">
      {products.length > 0 ? (
        arrayProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => dispatch(setOpenProductDetailTrue(product.id))}
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
        <div className="flex flex-col justify-center items-center h-full my-[2rem]">
          <p className="text-secondary text-center text-[2rem] first-letter:capitalize">{newName} is out!</p>
          <Link to={config.routes.shop} className="btn-secondary uppercase">
            go to shop
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoryProductList;
