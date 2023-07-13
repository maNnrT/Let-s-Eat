import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import CarouselProduct from './CarouselProduct';
const CarouselProduct = React.lazy(() => import('./CarouselProduct'));
import CarouselCustomer from './CarouselCustomer';
import letEatImg from '@/assets/image/image1.png';
import menuFeature from '@/assets/svg/menu_Feature.svg';
import natureIngredient from '@/assets/svg/ingredients_Feature.svg';
import workingHoursImg from '@/assets/image/image2.png';
import sweetBakery from '@/assets/image/image3.png';
// import testimonial from '@/assets/Image/image9.png';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { dishFilterProductChange } from '@/redux/features/products/ProductsSlice';
import { getProductsByDishSelector } from '@/redux/selectors';
import { getProducts } from '@/redux/features/products/ProductsSlice';
// import config from '@/config';
import BannerSlide from './BannerSlider/BannerSlider';
import { Product } from '@/types/types';
import LoadingFallback from '@/components/LoadingFallback/LoadingFallback';
function Homepage() {
  // const isLogin = useAppSelector(getIsLogin);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products: Product[] = useAppSelector(getProductsByDishSelector);
  const filterBtn = [
    { value: 'fresh-baked', title: 'Fresh Baked' },
    { value: 'sweetcake', title: 'Sweet cake' },
    { value: 'breakfast', title: 'Breakfast' },
    { value: 'coffee&tea', title: 'Coffee & Tea' },
  ];
  React.useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(dishFilterProductChange((e.target as HTMLInputElement).value));
  };

  return (
    <div className="w-full">
      <BannerSlide />
      <div className="w-full h-auto bg-primary">
        <div className="panel-layer desktop:mt-[-9.2rem] desktop:mb-[-13.8rem] z-[1] mt-0 mb-0">
          <div className="container desktop:py-[7.2rem] desktop:px-[10.3rem] pt-[2rem] pb-[2.4rem]">
            <div className="grid grid-cols-2  w-full gap-x-[3.2rem] gap-y-[2.4rem] desktop:gap-y-0 ">
              <div className="order-2 desktop:order-1 col-span-2 desktop:col-span-1">
                <LazyLoadImage src={letEatImg} alt="letEat" className="w-full " />
              </div>
              <div className="flex flex-col order-1 desktop:order-2 col-span-2 desktop:col-span-1">
                <div>
                  <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
                  <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                    ABOUT US
                  </p>
                </div>
                <p className="font-fahkwang font-normal desktop:text-[4.4rem] text-[2.2rem] desktop:leading-[1] leading-[140%] desktop:mt-[3.6rem] mt-[2rem] text-151618 uppercase line-clamp-1">
                  LET'S EAT!
                </p>
                <p className="font-light text-[1.6rem] text-666565 mt-[1.6rem] line-clamp-6 desktop:webkit-box hidden">
                  Let’s Eat is a big bakery in New York. We’re a wholesale bakery that provides delicious and all
                  natural baked goods to New York neighborhood restaurants, coffee houses and specialty food shops. We
                  offer packaged goods, as well as products for food service and private wholesale label customers. For
                  over 20 years, our dedication has been to provide quality, wholesome, hand crafted and (most
                  importantly) delicious products.
                </p>
                <p className="font-light text-[1.6rem] text-666565 mt-[1.6rem] leading-[140%] line-clamp-2 desktop:hidden ">
                  Let’s Eat is a big bakery in New York. We’re a wholesale bakery that provides delicious and all
                  natural baked goods to New York neighborhood restaurants, coffee houses and specialty food shops. We
                  offer packaged goods, as well as products for food service and private wholesale label customers.
                </p>
                <button className="desktop:mt-[4rem] mt-[2rem] btn-secondary" onClick={() => navigate('/aboutus')}>
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container desktop:pt-[6rem] desktop:pb-[5.4rem] py-[2.4rem] ">
            <div className=" flex flex-col desktop:items-center items-start ">
              <div className="desktop:flex flex-col">
                <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                  —
                </span>
                <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem]">
                  FEATURE
                </p>
              </div>
              <p className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] desktop:leading-[120%] leading-[140%] mt-[2rem] text-151618 desktop:text-center text-left desktop:max-w-[54.8rem] w-full uppercase ">
                The birthplace of sweet breads
              </p>
              <p className="font-light text-[1.6rem] text-666565 desktop:mt-[1.6rem] mt-[1.2rem] desktop:text-center max-w-[59.4rem] ">
                We believe in the power of community, in helping those around us and living as sustainably as possible
              </p>
            </div>
            <div className="grid grid-cols-3 desktop:mt-[4.3rem] mt-[2.8rem] w-full gap-x-[3.2rem] gap-y-[2.4rem]">
              <div className="desktop:col-span-1 col-span-3 desktop:block flex justify-between">
                <img src={menuFeature} alt="" className="desktop:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] desktop:text-center text-373838 mt-[2rem] line-clamp-1">
                    Menu for every taste
                  </p>
                  <p className="font-light text-[1.8rem] desktop:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    Wide variety of breads, bringing great flavors to your meal
                  </p>
                </div>
              </div>
              <div className="desktop:col-span-1 col-span-3 desktop:block flex justify-between">
                <img src={natureIngredient} alt="" className="desktop:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] desktop:text-center text-373838 mt-[2rem] line-clamp-1">
                    Natural ingredients
                  </p>
                  <p className="font-light text-[1.8rem] desktop:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    We use only natural ingredients in the cooking of our product
                  </p>
                </div>
              </div>
              <div className="desktop:col-span-1 col-span-3 desktop:block flex justify-between">
                <img src={menuFeature} alt="" className="desktop:mx-auto mr-[2.4rem]" />
                <div className="flex-1">
                  <p className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] desktop:text-center text-373838 mt-[2rem] line-clamp-1">
                    Experienced chefs
                  </p>
                  <p className="font-light text-[1.8rem] desktop:text-center text-666565 mt-[0.8rem] line-clamp-2">
                    We have 20 years of experience in baking & distributing our products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container desktop:py-[9.8rem] desktop:px-[10.4rem] py-[2.4rem] ">
            <div className="desktop:grid grid-cols-12  bg-white h-auto hidden">
              <div
                className="bg-no-repeat bg-cover bg-center p-[4rem] col-span-7 h-full "
                style={{ backgroundImage: `url(${workingHoursImg})` }}
              >
                <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0] ">—</span>
                <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary leading-[100%] inline-block">
                  ABOUT US
                </p>
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
            <div className="w-full flex flex-col desktop:hidden ">
              <div className="desktop:flex flex-col">
                <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                  —
                </span>
                <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                  About us
                </p>
              </div>
              <p className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] desktop:leading-[120%] leading-[140%] mt-[2rem] text-151618 desktop:text-center text-left desktop:max-w-[54.8rem] w-full uppercase ">
                WORKING HOURS
              </p>
              <p className="font-light text-[1.6rem] text-666565 desktop:mt-[1.6rem] mt-[1.2rem] desktop:text-center max-w-[59.4rem] ">
                90 Broad St. 90 Broad Street, 2nd floor, New York, NY
              </p>
              <button className="desktop:mt-[6rem] mt-[2.4rem] btn-secondary" onClick={() => navigate('/contact')}>
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
        className="w-full desktop:h-[76rem] h-fit bg-no-repeat bg-cover bg-center relative "
        style={{ backgroundImage: `url(${sweetBakery})` }}
      >
        <div className="container">
          <div className=" flex flex-col item-start desktop:items-center pt-[4rem] desktop:pt-[22rem] desktop:pb-[31rem] pb-[4.7rem]">
            <div className="desktop:flex flex-col">
              <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                About us
              </p>
            </div>
            <h1 className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] desktop:leading-[100%] leading-[140%] mt-[2rem] text-f6f4f3 text-left uppercase mb-0 desktop:text-center">
              Sweet Bakery
            </h1>
            <p className="font-light text-[1.6rem] desktop:mt-[2rem] mt-[1.2rem] desktop:text-center max-w-[79.4rem] line-clamp-[9] desktop:line-clamp-4 ">
              We believe in making good bread. As we’ve grown, so has our menu and our community, yet our values have
              stayed the same. We take the time to make our bread, pastries, cakes, breakfasts and lunches as we always
              have – with care, by hand and according to the season – so that we don’t need to compromise on what we
              eat, whether we’re on the go, or taking time out in one of our bakeries.
            </p>

            <div className="grid desktop:grid-cols-4 grid-cols-2 desktop:mt-[6rem] mt-[3.6rem] w-full desktop:gap-x-[3.2rem] gap-x-[4rem] gap-y-[2.4rem] ">
              <div>
                <h3 className="font-fahkwang font-medium desktop:text-[5.2rem] text-[3.2rem] leading-[100%] desktop:text-center text-f6f4f3">
                  300<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal desktop:text-[2rem] text-[1.4rem] desktop:text-center text-cfcfcf desktop:mt-[1.6rem] mt-[0.4rem]">
                  Visitors daily
                </p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium desktop:text-[5.2rem] text-[3.2rem] leading-[100%] desktop:text-center text-[#F6F4F3]">
                  500<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal desktop:text-[2rem] text-[1.4rem] desktop:text-center text-cfcfcf desktop:mt-[1.6rem] mt-[0.4rem]">
                  Deliveries monthly
                </p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium desktop:text-[5.2rem] text-[3.2rem] leading-[100%] desktop:text-center text-[#F6F4F3]">
                  100<span className="text-secondary">%</span>
                </h3>
                <p className="font-normal desktop:text-[2rem] text-[1.4rem] desktop:text-center text-cfcfcf desktop:mt-[1.6rem] mt-[0.4rem]">
                  Positive feedback
                </p>
              </div>
              <div>
                <h3 className="font-fahkwang font-medium desktop:text-[5.2rem] text-[3.2rem] leading-[100%] desktop:text-center text-[#F6F4F3]">
                  40<span className="text-secondary">+</span>
                </h3>
                <p className="font-normal desktop:text-[2rem] text-[1.4rem] desktop:text-center text-cfcfcf desktop:mt-[1.6rem] mt-[0.4rem]">
                  Awards and honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary">
        <div className="panel-layer desktop:mt-[-9.2rem] desktop:mb-[-13.8rem] z-[1]">
          <div className="container">
            <div className=" flex flex-col desktop:items-center desktop:pt-[6rem] pt-[2.4rem]  ">
              <div className="desktop:flex flex-col">
                <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                  —
                </span>
                <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                  our menu
                </p>
              </div>
              <h1
                className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] 
              desktop:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
              uppercase mb-0 desktop:text-center"
              >
                SPECIAL DISHES!
              </h1>
              <p
                className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] 
              mt-[1.2rem] desktop:text-center max-w-[59.4rem] desktop:line-clamp-3 line-clamp-5"
              >
                We bake by hand with natural ingredients, and while we are ordinary people, we want to make
                extraordinary things. We can’t imagine doing anything more gratifying than baking our, and your, bread.
              </p>
              <div className="desktop:mt-[4rem] mt-[2.4rem] w-full h-fit flex desktop:justify-center desktop:gap-[0.4rem] gap-[0.8rem] overflow-x-auto no-scrollbar">
                {filterBtn.map((filter) => (
                  <div key={filterBtn.indexOf(filter)} className=" ">
                    <input
                      type="radio"
                      name="type"
                      id={filter.value}
                      value={filter.value}
                      className="hidden peer"
                      onChange={handleFilterChange}
                    />
                    <label
                      htmlFor={filter.value}
                      className="btn-secondary-reverse w-[12.7rem] h-[5.4rem] font-bolds text-[1.8rem] leading-[130%] 
                                 peer-checked:bg-secondary peer-checked:text-white"
                    >
                      {filter.title}
                    </label>
                  </div>
                ))}
              </div>
              <div className="desktop:mt-[4rem] desktop:mb-[12.8rem] my-[2.4rem] container h-fit w-full overflow-x-auto no-scrollbar">
                <React.Suspense fallback={<LoadingFallback />}>
                  <CarouselProduct products={products} />
                </React.Suspense>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container ">
            <div className=" w-full h-auto desktop:py-[6rem] py-[2.4rem]">
              <div className="grid grid-cols-2 bg-white gap-y-[2rem]">
                <div className="w-full flex flex-col items-center desktop:col-span-1 col-span-2 desktop:order-1 order-2">
                  <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0px] desktop:mt-[3.4rem]">
                    —
                  </span>
                  <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] leading-[140%] text-secondary desktop:mt-[0.8rem] mt-[0.4rem]">
                    TESTIMONIALS
                  </p>
                  <h1
                    className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] desktop:leading-[100%] 
                  leading-[140%] desktop:mt-[1.2rem] mt-[0.4rem] text-primary text-center uppercase desktop:mb-[5.2rem] mb-[1.2rem] line-clamp-1"
                  >
                    OUR CUSTOMERS!
                  </h1>
                  <div className="w-full">
                    <CarouselCustomer />
                  </div>
                </div>
                {/* <div
                  className="w-full bg-no-repeat bg-cover bg-center desktop:col-span-1 col-span-2 desktop:h-auto h-[25.6rem] desktop:order-2 order-1"
                  style={{ backgroundImage: `url(${testimonial})` }}
                ></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
