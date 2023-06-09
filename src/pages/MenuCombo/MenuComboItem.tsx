import { Product } from '@/types/types';
import loveCombo from '@/assets/image/image26.png';
import loveCombo2 from '@/assets/image/image27.png';
import React from 'react';
import config from '@/config';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getIsLogin } from '@/redux/selectors';
import { addToCartCombo } from '@/redux/features/cart/CartSlice';
import { setOpenAddToCart } from '@/redux/features/modalSlice/modalSlice';
interface Props {
  id: number | undefined;
  name: string;
  img: string;
  numberPeople: number;
  dishes: Product[];
}
function MenuComboItem({ id, name, img, numberPeople, dishes }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogin: boolean = useAppSelector(getIsLogin);
  const openModal = () => {
    dispatch(setOpenAddToCart(true));
    setTimeout(() => {
      dispatch(setOpenAddToCart(false));
    }, 1000);
  };
  const refDialog2 = React.useRef<HTMLDialogElement>(null);
  const openModal2 = () => {
    refDialog2.current?.showModal();
    setTimeout(() => {
      refDialog2.current?.close();
    }, 1000);
  };
  // console.log("check",dishes);
  // dishes.forEach((dish)=>{
  //   console.log('start-----------------');
  //   console.log(dish.name,dish.dishLeft);
  //   console.log('end-----------------');
  // })
  const [isAvailable, setIsAvailable] = React.useState<boolean>(
    dishes.every((dish) => {
      if (dish.numberOfDish) {
        // console.log(dish.name, dish.numberOfDish, dish.dishLeft, dish.numberOfDish < dish.dishLeft);
        return dish.dishLeft > dish.numberOfDish * 1;
      }
    }),
  );
  React.useEffect(() => {
    setIsAvailable(
      dishes.every((dish) => {
        if (dish.numberOfDish) return dish.dishLeft > dish.numberOfDish * 1;
      }),
    );
  }, [isAvailable]);
  // console.log("-----------------");
  // console.log(isAvailable);
  // console.log("-----------------");

  const handleAddToCart = () => {
    // console.log('-----------------');
    // console.log(isAvailable);
    // console.log('-----------------');

    if (isLogin) {
      if (isAvailable === true) {
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
      } else if (isAvailable === false) {
        openModal2();
      }
    } else {
      navigate(config.routes.login);
    }
  };
  return (
    <div className="container grid desktop:grid-cols-3 grid-cols-1 gap-x-[3.2rem] h-full desktop:mt-[7.4rem] desktop:mb-[11.9rem] mt-[2.4rem] mb-[2.4rem]">
      <div className="grid-cols-1 gap-y-[3.2rem] hidden desktop:grid">
        <div className="w-full bg-333236 px-[3.8rem] py-[9.7rem] flex flex-col items-center h-fit">
          <p className="font-fahkwang font-normal text-[2.4rem] leading-[100%] text-center uppercase">FIND US HERE</p>
          <p className="font-light text-[1.8rem] text-center mt-[2.8rem]">
            90 Broad St. 90 Broad Street, 2nd floor, New York, NY
          </p>
          <p className="mt-[0.4rem] font-light text-[1.8rem] text-center">(+35) 708 128 5245</p>
        </div>
        <div className="w-full border-[1.5px] border-secondary px-[8.7rem] py-[4.4rem] flex flex-col items-center h-fit">
          <div className="flex flex-col items-center">
            <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center line-clamp-1">
              On weekend & Holiday
            </h6>
            <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem] line-clamp-1">
              08:00 - 14:00
            </p>
            <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem] line-clamp-1">
              16:00 - 22:00
            </p>
            <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center mt-[3.2rem] line-clamp-1">
              Weekday
            </h6>
            <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem] line-clamp-1">
              09:00 - 13:00
            </p>
            <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem] line-clamp-1">
              17:00 - 20:00
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-fit py-[28.6rem] bg-center bg-cover bg-no-repeat hidden desktop:block"
        style={{ backgroundImage: `url(${loveCombo})` }}
      >
        <p className="font-normal text-[1.8rem] leading-[100%] text-center uppercase">For {numberPeople} people</p>
        <p className="font-fahkwang font-normal text-[4rem] leading-[100%] text-center uppercase mt-[1.6rem] h-fit line-clamp-1">
          {name}
        </p>
        <div className="w-[14.5rem] border-b-[1px] border-b-white mt-[4rem] mx-auto">
          <Link
            to={config.routes.shop}
            className="cursor-pointer font-light text-[1.8rem] leading-[100%] text-center uppercase pb-[0.4rem]"
          >
            CHECK THE MENU
          </Link>
        </div>
      </div>
      <div
        className="h-full p-[3.2rem] relative bg-center bg-cover bg-no-repeat hidden desktop:block"
        style={{
          backgroundImage: `url(${loveCombo2})`,
        }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-151618 opacity-70 z-[1]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 z-[2] p-[3.2rem]">
          <div className=" border-[1px] border-white h-full pt-[2.8rem] px-[1.6rem] pb-[2rem] relative">
            <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-center uppercase opacity-95">
              {name}
            </p>
            <p className="font-light text-[1.4rem] leading-[100%] text-center text-b5b6b6 mt-[1.2rem] mb-[6rem]">
              {dishes &&
                dishes.reduce((total, dish) => {
                  return (total += dish.numberOfDish ? dish.numberOfDish : 0);
                }, 0)}{' '}
              DISHES - ${' '}
              {dishes &&
                dishes
                  .reduce((total, dish) => {
                    return (total += dish.numberOfDish
                      ? Number(dish.price) * dish.numberOfDish
                      : Number(dish.price) * 0);
                  }, 0)
                  .toFixed(2)}
            </p>
            {dishes &&
              dishes.map((dish) => (
                <div className="w-full h-fit mt-[2.4rem]" key={dish.id}>
                  <div className="flex justify-between">
                    <div className="text-[1.8rem] font-normal leading -[100%] capitalize">
                      {dish.numberOfDish}x {dish.name}
                    </div>
                    <div className="border-b-[4px] border-dotted border-white flex-1 h-[1.8rem] mx-[0.7rem]"></div>
                    <div className="text-[1.8rem] font-normal leading -[100%] capitalize">
                      ${dish.numberOfDish && (Number(dish.price) * dish.numberOfDish).toFixed(2)}
                    </div>
                  </div>
                  <div className="mt-[0.8rem] ">
                    <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6 line-clamp-3">{dish.detail}</p>
                  </div>
                </div>
              ))}
            <div className="absolute w-[14.5rem] border-b-[1.25px] border-secondary bottom-[2rem] left-[50%] translate-x-[-50%] cursor-pointer flex justify-center">
              <button
                className="font-light text-[1.8rem] leading-[100%] text-secondary uppercase"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full bg-center bg-cover bg-no-repeat desktop:hidden"
        style={{
          backgroundImage: `url(${loveCombo2})`,
        }}
      >
        <div className=" border-[1px] border-white h-fit pt-[2.8rem] px-[1.6rem] pb-[2rem] min-h-[60rem] flex flex-col ">
          <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-center uppercase opacity-95">
            {name}
          </p>
          <p className="font-light text-[1.4rem] leading-[100%] text-center text-b5b6b6 mt-[1.2rem] mb-[1.2rem] desktop:mb-[6rem]">
            {dishes &&
              dishes.reduce((total, dish) => {
                return (total += dish.numberOfDish ? dish.numberOfDish : 0);
              }, 0)}{' '}
            DISHES - ${' '}
            {dishes &&
              dishes
                .reduce((total, dish) => {
                  return (total += dish.numberOfDish ? Number(dish.price) * dish.numberOfDish : Number(dish.price) * 0);
                }, 0)
                .toFixed(2)}
          </p>
          {dishes &&
            dishes.map((dish) => (
              <div className="w-full h-fit desktop:mt-[2.4rem] mt-[1.2rem]" key={dish.id}>
                <div className="flex justify-between">
                  <div className="text-[1.8rem] font-normal leading -[100%] capitalize">
                    {dish.numberOfDish}x {dish.name}
                  </div>
                  <div className="border-b-[4px] border-dotted border-white flex-1 h-[1.8rem] mx-[0.7rem]"></div>
                  <div className="text-[1.8rem] font-normal leading -[100%] capitalize">
                    ${dish.numberOfDish && (Number(dish.price) * dish.numberOfDish).toFixed(2)}
                  </div>
                </div>
                <div className="mt-[0.8rem] ">
                  <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6 line-clamp-3">{dish.detail}</p>
                </div>
              </div>
            ))}

          <div className="w-[14.5rem] border-b-[1.25px] border-secondary bottom-[2rem] cursor-pointer flex justify-center items-end mt-[1.2rem] mx-auto flex-1">
            <button
              className="font-light text-[1.8rem] leading-[100%] text-secondary uppercase h-fit"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuComboItem;
