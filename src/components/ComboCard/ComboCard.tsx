import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { getIsLogin } from '@/redux/selectors';
// import SmallPopup from '../Popup/SmallPopup/SmallPopup';
// import check from '@/assets/svg/check_formCheckOut.svg';
import { addToCartCombo } from '@/redux/features/cart/CartSlice';
import { setOpenAddToCart } from '@/redux/features/modalSlice/modalSlice';

interface Props {
  id: number | undefined;
  img: string;
  name: string;
  numberPeople: number;
  dishes: Product[];
}
function ComboCard({ id, img, name, numberPeople, dishes }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin: boolean = useSelector(getIsLogin);
  const openModal = () => {
    dispatch(setOpenAddToCart(id));
  };
  const handleAddToCart = () => {
    if (isLogin) {
      dispatch(
        addToCartCombo({
          id: id,
          img: img,
          name: name,
          price: dishes
            .reduce((total, dish) => {
              return (total += dish.numberOfDish ? Number(dish.price) * dish.numberOfDish : Number(dish.price) * 0);
            }, 0)
            .toFixed(2),
          dishes: dishes,
          quantity: 1,
        }),
      );
      openModal();
    } else {
      navigate(config.routes.login);
    }
  };
  return (
    <div
      className="desktop:w-full w-[22rem] h-full bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)] "
      key={id}
    >
      <div className="w-full desktop:h-[26.1rem] h-[20.6rem] overflow-hidden">
        <LazyLoadImage
          src={img}
          alt=""
          className="w-full desktop:h-[26.1rem] h-[20.6rem] object-cover group-hover:scale-110 duration-500 cursor-pointer transition-all"
          onClick={() => navigate(`${config.routes.menucombo}/${id}`)}
        />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full flex-1">
        <p className="desktop:text-[2.2rem] text-[1.6rem] leading-[130%] font-fahkwang font-semibold text-444546 text-left line-clamp-1">
          {name}
        </p>
        <p className="desktop:text-[1.6rem] text-[1.4rem] font-light text-3d3535 mt-[0.3rem] text-left min-h-[4.8rem] line-clamp-2">
          For {numberPeople} people
        </p>
        <div className="flex justify-between items-end desktop:mt-[1rem] mt-[0.4rem] self-end w-full desktop:mb-[0.8rem] mb-[0.7rem]">
          <p className="font-bold desktop:text-[2.2rem] text-[1.8rem] leading-[170%] text-394149">
            $
            {dishes &&
              dishes
                .reduce((total, dish) => {
                  return (total += dish.numberOfDish ? Number(dish.price) * dish.numberOfDish : Number(dish.price) * 0);
                }, 0)
                .toFixed(2)}
          </p>
          <p
            className="font-bold desktop:text-[1.8rem] text-[1.6rem] leading-[170%] text-secondary cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComboCard;
