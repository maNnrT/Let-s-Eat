import * as React from 'react';

import CarouselProduct from './CarouselProduct';
import CarouselCustomer from './CarouselCustomer';
import letEatImg from '@/assets/image/image1.png';
import menuFeature from '@/assets/svg/menu_Feature.svg';
import natureIngredient from '@/assets/svg/ingredients_Feature.svg';
import workingHoursImg from '@/assets/image/image2.png';
import sweetBakery from '@/assets/image/image3.png';
import testimonial from '@/assets/Image/image9.png';
import { getIdUserSelector, getIsLogin, getUserCartSelector } from '@/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterChange } from '@/redux/features/products/ProductsSlice';
import { getProductsByFilterSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
// import config from '@/config';
import BannerSlide from './BannerSlider/BannerSlider';
import { Item, Product } from '@/types/types';
import { addUserCart } from '@/redux/features/cart/CartSlice';
function Homepage() {
  // const isLogin = useSelector(getIsLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products: Product[] = useSelector(getProductsByFilterSelector);
  const cart: Item[] = useSelector(getUserCartSelector);
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const filterBtn = [
    { value: 'fresh-baked', title: 'Fresh Baked' },
    { value: 'sweetcake', title: 'Sweet cake' },
    { value: 'breakfast', title: 'Breakfast' },
    { value: 'coffeeTea', title: 'Coffee & Tea' },
  ];
  React.useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleFilterChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    dispatch(filterChange((e.target as HTMLButtonElement).value));
  };
  const updateCart = () => {
    if (cart.length > 0 && idUser) {
      dispatch(
        addUserCart({
          idUser,
          cart,
        }),
      );
    } else if (cart.length <= 0 && idUser) {
      dispatch(
        addUserCart({
          idUser,
          cart: [],
        }),
      );
    }
  };
  React.useEffect(() => {
    updateCart();
  }, [cart]);
  return (
    <div>
      {/* <Slider /> */}
      <BannerSlide />
      <div className="w-full h-auto bg-primary">
        <div className="panel-layer tablet:mt-[-9.2rem] tablet:mb-[-13.8rem] z-[1] mt-0 mb-0">
          <div className="container tablet:py-[7.2rem] tablet:px-[10.3rem] pt-[2rem] pb-[2.4rem]">
            <div className="grid grid-cols-2  w-full gap-x-[3.2rem] gap-y-[2.4rem] tablet:gap-y-0 ">
              <div className="order-2 tablet:order-1 col-span-2 tablet:col-span-1">
                <img src={letEatImg} alt="letEat" className="w-full " />
              </div>
              <div className="flex flex-col order-1 tablet:order-2 col-span-2 tablet:col-span-1">
                <div>
                  <span className="text-secondary mr-[0.8rem] tablet:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
                  <p className="font-normal tablet:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                    ABOUT US
                  </p>
                </div>
                <p className="font-fahkwang font-normal tablet:text-[4.4rem] text-[2.2rem] tablet:leading-[1] leading-[140%] tablet:mt-[3.6rem] mt-[2rem] text-151618 uppercase line-clamp-1">
                  LET'S EAT!
                </p>
                <p className="font-light text-[1.6rem] text-666565 mt-[1.6rem] line-clamp-6 tablet:webkit-box hidden">
                  Let’s Eat is a big bakery in New York. We’re a wholesale bakery that provides delicious and all
                  natural baked goods to New York neighborhood restaurants, coffee houses and specialty food shops. We
                  offer packaged goods, as well as products for food service and private wholesale label customers. For
                  over 20 years, our dedication has been to provide quality, wholesome, hand crafted and (most
                  importantly) delicious products.
                </p>
                <p className="font-light text-[1.6rem] text-666565 mt-[1.6rem] leading-[140%] line-clamp-2 tablet:hidden ">
                  Let’s Eat is a big bakery in New York. We’re a wholesale bakery that provides delicious and all
                  natural baked goods to New York neighborhood restaurants, coffee houses and specialty food shops. We
                  offer packaged goods, as well as products for food service and private wholesale label customers.
                </p>
                <button className="tablet:mt-[4rem] mt-[2rem] btn-secondary" onClick={() => navigate('/aboutus')}>
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container tablet:pt-[6rem] tablet:pb-[5.4rem] py-[2.4rem] ">
            <div className=" flex flex-col tablet:items-center items-start ">
              <div className="tablet:flex flex-col">
                <span className="text-secondary text-[3.2rem] leading-[0] inline-block mr-[0.8rem] tablet:mr-0 text-center">
                  —
                </span>
                <p className="font-mukta font-normal text-[1.8rem] text-secondary mt-[0.8rem] inline-block tablet:block tablet:mt-[0.8rem]">
                  FEATURE
                </p>
              </div>
              <p className="font-fahkwang font-normal tablet:text-[4rem] text-[2rem] tablet:leading-[120%] leading-[140%] mt-[2rem] text-151618 tablet:text-center text-left tablet:max-w-[54.8rem] w-full uppercase ">
                The birthplace of sweet breads
              </p>
              <p className="font-light text-[1.6rem] text-666565 tablet:mt-[1.6rem] mt-[1.2rem] tablet:text-center max-w-[59.4rem] ">
                We believe in the power of community, in helping those around us and living as sustainably as possible
              </p>
            </div>
            <div className="grid grid-cols-3 tablet:mt-[4.3rem] mt-[2.8rem] w-full gap-x-[3.2rem] gap-y-[2.4rem]">
              <div className="tablet:col-span-1 col-span-3 tablet:block flex justify-between">
                <img src={menuFeature} alt="" className="tablet:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] tablet:text-center text-373838 mt-[2rem] line-clamp-1">
                    Menu for every taste
                  </p>
                  <p className="font-light text-[1.8rem] tablet:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    Wide variety of breads, bringing great flavors to your meal
                  </p>
                </div>
              </div>
              <div className="tablet:col-span-1 col-span-3 tablet:block flex justify-between">
                <img src={natureIngredient} alt="" className="tablet:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] tablet:text-center text-373838 mt-[2rem] line-clamp-1">
                    Natural ingredients
                  </p>
                  <p className="font-light text-[1.8rem] tablet:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    We use only natural ingredients in the cooking of our product
                  </p>
                </div>
              </div>
              <div className="tablet:col-span-1 col-span-3 tablet:block flex justify-between">
                <img src={menuFeature} alt="" className="tablet:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] tablet:text-center text-373838 mt-[2rem] line-clamp-1">
                    Experienced chefs
                  </p>
                  <p className="font-light text-[1.8rem] tablet:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    We have 20 years of experience in baking & distributing our products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container tablet:py-[9.8rem] tablet:px-[10.4rem] py-[2.4rem] ">
            <div className="tablet:grid grid-cols-12  bg-white h-auto hidden">
              <div
                className="bg-no-repeat bg-cover bg-center p-[4rem] col-span-7 h-full "
                style={{ backgroundImage: `url(${workingHoursImg})` }}
              >
                <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0] ">—</span>
                <p className="font-normal text-[1.8rem] text-secondary leading-[100%] inline-block">ABOUT US</p>
                <h3 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[6rem] line-clamp-1">
                  Working hours
                </h3>
                <p className="font-light text-[1.6rem] text-d2d0cf mt-[1.9rem] line-clamp-1">
                  90 Broad St. 90 Broad Street, 2nd floor, New York, NY
                </p>
                <button className="mt-[6rem] btn-secondary" onClick={() => navigate('/contact')}>
                  CONTACT US
                </button>
              </div>
              <div className="flex-col items-center pt-[6rem] col-span-5">
                <p className="font-mukta font-normal text-[18px] leading-[150%] text-primary text-center line-clamp-1">
                  On weekend & Holiday
                </p>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem] line-clamp-1">
                  08:00 - 14:00
                </p>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem] line-clamp-1">
                  16:00 - 22:00
                </p>
                <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-primary text-center mt-[3.2rem] line-clamp-1">
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
            <div className="w-full flex flex-col tablet:hidden ">
              <div className="tablet:flex flex-col">
                <span className="text-secondary text-[3.2rem] leading-[0] inline-block mr-[0.8rem] tablet:mr-0">—</span>
                <p className="font-mukta font-normal text-[1.8rem] text-secondary mt-[0.8rem] inline-block tablet:block tablet:mt-[0.8rem] uppercase">
                  About us
                </p>
              </div>
              <p className="font-fahkwang font-normal tablet:text-[4rem] text-[2rem] tablet:leading-[120%] leading-[140%] mt-[2rem] text-151618 tablet:text-center text-left tablet:max-w-[54.8rem] w-full uppercase ">
                WORKING HOURS
              </p>
              <p className="font-light text-[1.6rem] text-666565 tablet:mt-[1.6rem] mt-[1.2rem] tablet:text-center max-w-[59.4rem] ">
                90 Broad St. 90 Broad Street, 2nd floor, New York, NY
              </p>
              <button className="tablet:mt-[6rem] mt-[2.4rem] btn-secondary" onClick={() => navigate('/contact')}>
                CONTACT US
              </button>
              <div
                className=" mt-[2.4rem] w-full h-[20rem] py-[2rem] flex flex-col items-center bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${workingHoursImg})` }}
              >
                <p className="font-mukta font-normal text-[1.6rem] leading-[150%] text-secondary text-center line-clamp-1">
                  On weekend & Holiday
                </p>
                <p className="font-fahkwang font-bold text-ebe8e7 text-[1.6rem] leading-[2.08rem] text-center mt-[0.4rem] line-clamp-1">
                  08:00 - 14:00
                </p>
                <p className="font-fahkwang font-bold text-ebe8e7 text-[1.6rem] leading-[2.08rem] text-center mt-[0.4rem] line-clamp-1">
                  08:00 - 14:00
                </p>
                <p className="font-mukta font-normal text-[1.6rem] leading-[150%] text-secondary text-center line-clamp-1 mt-[1.6rem]">
                  Weekday
                </p>
                <p className="font-fahkwang font-bold text-ebe8e7 text-[1.6rem] leading-[2.08rem] text-center mt-[0.4rem] line-clamp-1">
                  08:00 - 14:00
                </p>
                <p className="font-fahkwang font-bold text-ebe8e7 text-[1.6rem] leading-[2.08rem] text-center mt-[0.4rem] line-clamp-1">
                  08:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[76rem] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${sweetBakery})` }}
      >
        <div className="container">
          <div className=" flex flex-col items-center pt-[22rem] pb-[31rem]">
            <span className="text-secondary text-[3.2rem] leading-[0px]">—</span>
            <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem]">ABOUT US</p>
            <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-f6f4f3 text-center uppercase mb-0">
              Sweet Bakery
            </h1>
            <p className="font-light text-[1.6rem] mt-[2rem] text-center max-w-[79.4rem] line-clamp-4">
              We believe in making good bread. As we’ve grown, so has our menu and our community, yet our values have
              stayed the same. We take the time to make our bread, pastries, cakes, breakfasts and lunches as we always
              have – with care, by hand and according to the season – so that we don’t need to compromise on what we
              eat, whether we’re on the go, or taking time out in one of our bakeries.
            </p>

            <div className="grid grid-cols-4 mt-[6rem] w-full gap-x-[3.2rem] ">
              <div>
                <h3 className="font-fahkwang font-medium text-[5.2rem] leading-[100%] text-center text-f6f4f3">
                  300<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal text-[2rem] text-center text-cfcfcf mt-[1.6rem]">Visitors daily</p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium text-[52px] leading-[100%] text-center text-[#F6F4F3]">
                  500<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal text-[2rem] text-center text-cfcfcf mt-[1.6rem]">Deliveries monthly</p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium text-[52px] leading-[100%] text-center text-[#F6F4F3]">
                  100<span className="text-secondary">%</span>
                </h3>
                <p className="font-normal text-[2rem] text-center text-cfcfcf mt-[1.6rem]">Positive feedback</p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium text-[52px] leading-[100%] text-center text-[#F6F4F3]">
                  40<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal text-[2rem] text-center text-cfcfcf mt-[1.6rem]">Awards and honors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary">
        <div className="panel-layer mt-[-9.2rem] mb-[-13.8rem] z-[1]">
          <div className="container">
            <div className=" flex flex-col items-center pt-[6rem]">
              <span className="text-secondary leading-[0px] text-[3.2rem]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary mt-[0.8rem]">OUR MENU</p>
              <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
                Special dishes!
              </h1>
              <p className="font-light text-[1.6rem] text-666565 mt-[2rem] text-center max-w-[59.4rem] line-clamp-3">
                We bake by hand with natural ingredients, and while we are ordinary people, we want to make
                extraordinary things. We can’t imagine doing anything more gratifying than baking our, and your, bread.
              </p>
              <div className="mt-[4rem] w-auto h-[5.4rem] grid grid-cols-4 gap-[0.4rem]">
                {filterBtn.map((filter) => (
                  <div key={filterBtn.indexOf(filter)}>
                    <button
                      value={filter.value}
                      onClick={handleFilterChange}
                      className="btn-secondary w-[12.7rem] font-bolds text-[1.8rem] leading-[130%]"
                    >
                      {filter.title}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-[4rem] mb-[12.8rem] container h-fit">
                <CarouselProduct products={products} />
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container ">
            <div className=" w-full h-auto py-[6rem]">
              <div className="grid grid-cols-2  bg-white">
                <div className="w-full flex flex-col items-center">
                  <span className="text-secondary text-[3.2rem] leading-[0px] mt-[3.4rem]">—</span>
                  <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem]">TESTIMONIALS</p>
                  <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[1.2rem] text-primary text-center uppercase mb-[5.2rem] line-clamp-1">
                    OUR CUSTOMERS!
                  </h1>
                  <div className="w-full">
                    <CarouselCustomer />
                  </div>
                </div>
                <div
                  className="w-full bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
