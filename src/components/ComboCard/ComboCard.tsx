import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as React from 'react';
import { Product } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { getIsLogin } from '@/redux/selectors';
// import SmallPopup from '../Popup/SmallPopup/SmallPopup';
// import check from '@/assets/svg/check_formCheckOut.svg';
import { addToCartCombo } from '@/redux/features/cart/CartSlice';

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
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
    setTimeout(() => {
      refDialog.current?.close();
    }, 1000);
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
      className="w-full h-fit bg-white flex flex-col group shadow-[0_2px_12px_rgba(0,0,0,0.12)] "
      key={id}
    >
      {/* <SmallPopup refDialog={refDialog} img={check} title="Add to shopping cart!" /> */}
      <div className="w-full h-[26.1rem] overflow-hidden">
        <LazyLoadImage
          src={img}
          alt=""
          className="w-full h-[26.1rem] object-cover group-hover:scale-110 duration-500 cursor-pointer"
          onClick={() => navigate(`${config.routes.menucombo}/${id}`)}
        />
      </div>
      <div className="w-full px-[1.6rem] mt-[1.6rem] flex flex-col h-full">
        <p className="text-[2.2rem] leading-[2.9rem] font-fahkwang font-semibold text-444546 text-left line-clamp-1">
          {name}
        </p>
        <p className="text-[1.6rem] font-light text-3d3535 mt-[0.3rem] text-left min-h-[4.8rem] line-clamp-2">
          For {numberPeople} people
        </p>
        <div className="flex justify-between items-end mt-[1rem] self-end w-full mb-[0.8rem]">
          <p className="font-bold text-[2.2rem] leading-[3.7rem] text-394149">
            $
            {dishes &&
              dishes
                .reduce((total, dish) => {
                  return (total += dish.numberOfDish ? Number(dish.price) * dish.numberOfDish : Number(dish.price) * 0);
                }, 0)
                .toFixed(2)}
          </p>
          <p className="font-bold text-[1.8rem] leading-[3rem] text-secondary cursor-pointer" onClick={handleAddToCart}>
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComboCard;
