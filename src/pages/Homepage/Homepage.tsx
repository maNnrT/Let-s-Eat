// import classNames from 'classnames/bind';
// import styles from './Homepage.module.scss';
import * as React from 'react';
import Slider from './Slider';
import CarouselProduct from './CarouselProduct';
import CarouselCustomer from './CarouselCustomer';
import letEatImg from '../../assets/image/image1.png';
import menuFeature from '../../assets/svg/menu_Feature.svg';
import natureIngredient from '../../assets/svg/ingredients_Feature.svg';
import workingHoursImg from '../../assets/image/image2.png';
import sweetBakery from '../../assets/image/image3.png';
import testimonial from '../../assets/Image/image9.png';
import { getIsLogin } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { getProductsSelector } from '../../redux/selectors';
import { getProducts } from './HompageSlice';
// const cx = classNames.bind(styles);
function Homepage() {
  const isLogin = useSelector(getIsLogin);
  const navigate = useNavigate();
  React.useEffect(()=>{
    if (isLogin === false) {
      navigate(config.routes.login)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  React.useEffect(() => {
    dispatch(getProducts());
    console.log('check:', products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Slider />
      <div className="w-full h-auto bg-primary">
        <div className="panel-layer mt-[-9.2rem] mb-[-13.8rem] z-[1]">
          <div className="container">
            <div className="grid grid-cols-2 py-[7.2rem] w-full gap-x-[3.2rem] px-[10.3rem] ">
              <div className="">
                <img src={letEatImg} alt="letEat" className="w-full " />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-secondary mr-[0.8rem] text-[3.2rem]">—</span>
                  <p className="font-normal text-[1.8rem] text-secondary inline-block">ABOUT US</p>
                </div>
                <h2 className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 ">
                  LET'S EAT!
                </h2>
                <p className="font-light text-[1.6rem] text-666565 mt-[1.6rem]">
                  Let’s Eat is a big bakery in New York. We’re a wholesale bakery that provides delicious and all
                  natural baked goods to New York neighborhood restaurants, coffee houses and specialty food shops. We
                  offer packaged goods, as well as products for food service and private wholesale label customers. For
                  over 20 years, our dedication has been to provide quality, wholesome, hand crafted and (most
                  importantly) delicious products.
                </p>
                <button className="mt-[4rem] btn-secondary">READ MORE</button>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container pt-[6rem] pb-[5.4rem]">
            <div className=" flex flex-col items-center ">
              <span className="text-secondary text-[3.2rem]">—</span>
              <p className="font-mukta font-normal text-[1.8rem] text-secondary mt-[0.8rem]">FEATURE</p>
              <h1 className="font-fahkwang font-normal text-[4rem] leading-[120%] mt-[2.1rem] text-151618 text-center max-w-[54.8rem] uppercase">
                The birthplace of sweet breads
              </h1>
              <p className=" font-light text-[1.6rem] text-666565 mt-[1.6rem] text-center max-w-[59.4rem]">
                We believe in the power of community, in helping those around us and living as sustainably as possible
              </p>
            </div>
            <div className="grid grid-cols-3 mt-[4.3rem] w-full gap-x-[3.2rem]">
              <div>
                <img src={menuFeature} alt="" className="mx-auto" />
                <h3 className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] text-center text-373838 mt-[2rem]">
                  Menu for every taste
                </h3>
                <p className="font-light text-[1.8rem] text-center text-666565 mt-[0.8rem]">
                  Wide variety of breads, bringing great flavors to your meal
                </p>
              </div>
              <div>
                <img src={natureIngredient} alt="" className="mx-auto" />
                <h3 className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] text-center text-373838 mt-[2rem]">
                  Natural ingredients
                </h3>
                <p className="font-light text-[1.8rem] text-center text-666565 mt-[0.8rem]">
                  We use only natural ingredients in the cooking of our product
                </p>
              </div>
              <div>
                <img src={menuFeature} alt="" className="mx-auto" />
                <h3 className="font-fahkwang font-medium text-[2rem] leading-[2.6rem] text-center text-373838 mt-[2rem]">
                  Experienced chefs
                </h3>
                <p className="font-light text-[1.8rem] text-center text-666565 mt-[0.8rem]">
                  We have 20 years of experience in baking & distributing our products
                </p>
              </div>
            </div>
          </div>
          <div className="panel-seperate"></div>
          <div className="container py-[9.8rem] px-[10.4rem] ">
            <div className="grid grid-cols-12  bg-white h-[36rem]">
              <div
                className="bg-no-repeat bg-cover bg-center p-[4rem] col-span-7"
                style={{ backgroundImage: `url(${workingHoursImg})` }}
              >
                <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0] ">—</span>
                <p className="font-normal text-[1.8rem] text-secondary leading-[100%] inline-block">ABOUT US</p>

                <h3 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[6rem]">Working hours</h3>
                <p className="font-light text-[1.6rem] text-d2d0cf mt-[1.9rem]">
                  90 Broad St. 90 Broad Street, 2nd floor, New York, NY
                </p>
                <button className="mt-[6rem] btn-secondary">CONTACT US</button>
              </div>
              <div className="flex flex-col items-center pt-[6rem] col-span-5">
                <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-primary text-center">
                  On weekend & Holiday
                </h6>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[9px]">
                  08:00 - 14:00
                </p>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-1">
                  08:00 - 14:00
                </p>
                <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-primary text-center mt-[32px]">
                  Weekday
                </h6>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[9px]">
                  08:00 - 14:00
                </p>
                <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-1">
                  08:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[90rem] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${sweetBakery})` }}
      >
        <div className="container">
          <div className=" flex flex-col items-center pt-[22rem] pb-[31rem]">
            <span className="text-secondary text-[3.2rem] leading-[0px]">—</span>
            <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem]">ABOUT US</p>
            <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-f6f4f3 text-center uppercase mb-0">
              Sweet Bakery
            </h1>
            <p className="font-light text-[1.6rem] mt-[2rem] text-center max-w-[79.4rem]">
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
        <div className="panel-layer mt-[-22.8rem] mb-[-13.8rem] z-[1]">
          <div className="container">
            <div className=" flex flex-col items-center pt-[6rem]">
              <span className="text-secondary leading-[0px]">——</span>
              <p className="font-normal text-[1.8rem] text-secondary mt-[0.8rem]">OUR MENU</p>
              <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
                Special dishes!
              </h1>
              <p className="font-light text-[1.6rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
                We bake by hand with natural ingredients, and while we are ordinary people, we want to make
                extraordinary things. We can’t imagine doing anything more gratifying than baking our, and your, bread.
              </p>
              <div className="mt-[4rem] w-[48rem] h-[5.4rem] grid grid-cols-4 gap-[0.4rem]">
                <button className="h-full bg-transparent border-[1.5px] border-secondary text-secondary text-[1.8rem] leading-[3rem] focus:bg-secondary focus:text-f6e8d6 focus:border-0 hover:bg-secondary hover:text-f6e8d6 hover:border-0">
                  Fresh Baked
                </button>
                <button className="h-full bg-transparent border-[1.5px] border-secondary text-secondary text-[1.8rem] leading-[3rem] focus:bg-secondary focus:text-f6e8d6 focus:border-0 hover:bg-secondary hover:text-f6e8d6 hover:border-0">
                  Sweet cake
                </button>
                <button className="h-full bg-transparent border-[1.5px] border-secondary text-secondary text-[1.8rem] leading-[3rem] focus:bg-secondary focus:text-f6e8d6 focus:border-0 hover:bg-secondary hover:text-f6e8d6 hover:border-0">
                  Breakfast
                </button>
                <button className="h-full bg-transparent border-[1.5px] border-secondary text-secondary text-[1.8rem] leading-[3rem] focus:bg-secondary focus:text-f6e8d6 focus:border-0 hover:bg-secondary hover:text-f6e8d6 hover:border-0">
                  Coffee & Tea
                </button>
              </div>
              <div className="mt-[4rem] mb-[12.8rem] w-[121.6rem] h-[41.2rem]">
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
                  <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[1.2rem] text-primary text-center uppercase mb-[5.2rem]">
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
