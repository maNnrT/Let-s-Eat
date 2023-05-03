import classNames from 'classnames/bind';
import styles from './MenuCombo.module.scss';
import * as React from 'react';
import heroBannerCategory from '../../assets/image/HeroBanner_MenuCombo.png';
import loveCombo from '../../assets/image/image26.png';
import loveCombo2 from '../../assets/image/image27.png';
import { Link } from 'react-router-dom';
import config from '../../config';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const cx = classNames.bind(styles);

function MenuCombo() {
  const ref = React.useRef<any>();
  const swipeNext = () => {
    ref.current.swiper.slideNext();
  };
  const swipePrev = () => {
    ref.current.swiper.slidePrev();
  };
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">MENU COMBO</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Menu Combo</p>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          OUR PERFECT COMBO
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          A full meal of bread and coffee, or a relaxing afternoon with some sweets and tea. Let’s see what we have!
        </p>

        <Swiper slidesPerView={1} className="mySwiper" ref={ref}>
          <SwiperSlide className="bg-fdf9f5">
            <div className="container  grid grid-cols-3 gap-x-[3.2rem] h-fit mt-[7.4rem] mb-[11.9rem]">
              <div className="grid grid-cols-1 gap-y-[3.2rem]">
                <div className="w-full bg-333236 px-[3.8rem] py-[9.7rem] flex flex-col items-center h-fit">
                  <p className="font-fahkwang font-normal text-[2.4rem] leading-[100%] text-center uppercase">
                    FIND US HERE
                  </p>
                  <p className="font-light text-[1.8rem] text-center mt-[2.8rem]">
                    90 Broad St. 90 Broad Street, 2nd floor, New York, NY
                  </p>
                  <p className="mt-[0.4rem] font-light text-[1.8rem] text-center">(+35) 708 128 5245</p>
                </div>
                <div className="w-full border-[1.5px] border-secondary px-[8.7rem] py-[4.4rem] flex flex-col items-center h-fit">
                  <div className="flex flex-col items-center">
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center">
                      On weekend & Holiday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      08:00 - 14:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      16:00 - 22:00
                    </p>
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center mt-[3.2rem]">
                      Weekday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      09:00 - 13:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      17:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="h-full px-[4.4rem] py-[28.6rem] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${loveCombo})` }}
              >
                <p className="font-normal text-[1.8rem] leading-[100%] text-center uppercase">For 2 people</p>
                <p className="font-fahkwang font-normal text-[4rem] leading-[100%] text-center uppercase mt-[1.6rem]">
                  LOVE COMBO
                </p>
                <div className="w-[14.5rem] border-b-[1px] border-b-white mt-[4rem] mx-auto">
                  <p className=" font-light text-[1.8rem] leading-[100%] text-center uppercase pb-[0.4rem]">
                    CHECK THE MENU
                  </p>
                </div>
              </div>
              <div
                className="h-full p-[3.2rem] relative bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${loveCombo2})`,
                }}
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-151618 opacity-70 z-[1]"></div>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-[2] p-[3.2rem]">
                  <div className=" border-[1px] border-white h-full pt-[2.8rem] px-[1.6rem] pb-[2rem] relative">
                    <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-center uppercase opacity-95">
                      RELAXING AFTERNOON
                    </p>
                    <p className="font-light text-[1.4rem] leading-[100%] text-center text-b5b6b6 mt-[1.2rem] mb-[6rem]">
                      6 DISHES - $ 23.70
                    </p>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-[14.5rem] border-b-[1.25px] border-secondary bottom-[2rem] left-[50%] translate-x-[-50%] cursor-pointer">
                      <p className="font-light text-[1.8rem] leading-[100%] text-secondary uppercase text-center ">
                        ADD TO CART
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-fdf9f5">
            <div className="container  grid grid-cols-3 gap-x-[3.2rem] h-fit mt-[7.4rem] mb-[11.9rem]">
              <div className="grid grid-cols-1 gap-y-[3.2rem]">
                <div className="w-full bg-333236 px-[3.8rem] py-[9.7rem] flex flex-col items-center h-fit">
                  <p className="font-fahkwang font-normal text-[2.4rem] leading-[100%] text-center uppercase">
                    FIND US HERE
                  </p>
                  <p className="font-light text-[1.8rem] text-center mt-[2.8rem]">
                    90 Broad St. 90 Broad Street, 2nd floor, New York, NY
                  </p>
                  <p className="mt-[0.4rem] font-light text-[1.8rem] text-center">(+35) 708 128 5245</p>
                </div>
                <div className="w-full border-[1.5px] border-secondary px-[8.7rem] py-[4.4rem] flex flex-col items-center h-fit">
                  <div className="flex flex-col items-center">
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center">
                      On weekend & Holiday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      08:00 - 14:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      16:00 - 22:00
                    </p>
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center mt-[3.2rem]">
                      Weekday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      09:00 - 13:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      17:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full px-[4.4rem] py-[28.6rem]" style={{ backgroundImage: `url(${loveCombo})` }}>
                <p className="font-normal text-[1.8rem] leading-[100%] text-center uppercase">For 2 people</p>
                <p className="font-fahkwang font-normal text-[4rem] leading-[100%] text-center uppercase mt-[1.6rem]">
                  LOVE COMBO
                </p>
                <div className="w-[14.5rem] border-b-[1px] border-b-white mt-[4rem] mx-auto">
                  <p className=" font-light text-[1.8rem] leading-[100%] text-center uppercase pb-[0.4rem]">
                    CHECK THE MENU
                  </p>
                </div>
              </div>
              <div
                className="h-full p-[3.2rem] relative"
                style={{
                  backgroundImage: `url(${loveCombo2})`,
                }}
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-151618 opacity-70 z-[1]"></div>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-[2] p-[3.2rem]">
                  <div className=" border-[1px] border-white h-full pt-[2.8rem] px-[1.6rem] pb-[2rem] relative">
                    <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-center uppercase opacity-95">
                      RELAXING AFTERNOON
                    </p>
                    <p className="font-light text-[1.4rem] leading-[100%] text-center text-b5b6b6 mt-[1.2rem] mb-[6rem]">
                      6 DISHES - $ 23.70
                    </p>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-[14.5rem] border-b-[1.25px] border-secondary bottom-[2rem] left-[50%] translate-x-[-50%] cursor-pointer">
                      <p className="font-light text-[1.8rem] leading-[100%] text-secondary uppercase text-center ">
                        ADD TO CART
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-fdf9f5">
            <div className="container  grid grid-cols-3 gap-x-[3.2rem] h-fit mt-[7.4rem] mb-[11.9rem]">
              <div className="grid grid-cols-1 gap-y-[3.2rem]">
                <div className="w-full bg-333236 px-[3.8rem] py-[9.7rem] flex flex-col items-center h-fit">
                  <p className="font-fahkwang font-normal text-[2.4rem] leading-[100%] text-center uppercase">
                    FIND US HERE
                  </p>
                  <p className="font-light text-[1.8rem] text-center mt-[2.8rem]">
                    90 Broad St. 90 Broad Street, 2nd floor, New York, NY
                  </p>
                  <p className="mt-[0.4rem] font-light text-[1.8rem] text-center">(+35) 708 128 5245</p>
                </div>
                <div className="w-full border-[1.5px] border-secondary px-[8.7rem] py-[4.4rem] flex flex-col items-center h-fit">
                  <div className="flex flex-col items-center">
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center">
                      On weekend & Holiday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      08:00 - 14:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      16:00 - 22:00
                    </p>
                    <h6 className="font-mukta font-normal text-[18px] leading-[150%] text-secondary text-center mt-[3.2rem]">
                      Weekday
                    </h6>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.9rem]">
                      09:00 - 13:00
                    </p>
                    <p className="font-fahkwang font-bold text-[#565758] text-[28px] leading-[36px] text-center mt-[0.4rem]">
                      17:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full px-[4.4rem] py-[28.6rem]" style={{ backgroundImage: `url(${loveCombo})` }}>
                <p className="font-normal text-[1.8rem] leading-[100%] text-center uppercase">For 2 people</p>
                <p className="font-fahkwang font-normal text-[4rem] leading-[100%] text-center uppercase mt-[1.6rem]">
                  LOVE COMBO
                </p>
                <div className="w-[14.5rem] border-b-[1px] border-b-white mt-[4rem] mx-auto">
                  <p className=" font-light text-[1.8rem] leading-[100%] text-center uppercase pb-[0.4rem]">
                    CHECK THE MENU
                  </p>
                </div>
              </div>
              <div
                className="h-full p-[3.2rem] relative"
                style={{
                  backgroundImage: `url(${loveCombo2})`,
                }}
              >
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-151618 opacity-70 z-[1]"></div>
                <div className="absolute left-0 right-0 top-0 bottom-0 z-[2] p-[3.2rem]">
                  <div className=" border-[1px] border-white h-full pt-[2.8rem] px-[1.6rem] pb-[2rem] relative">
                    <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-center uppercase opacity-95">
                      RELAXING AFTERNOON
                    </p>
                    <p className="font-light text-[1.4rem] leading-[100%] text-center text-b5b6b6 mt-[1.2rem] mb-[6rem]">
                      6 DISHES - $ 23.70
                    </p>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-fit mt-[2.4rem]">
                      <div className="flex justify-between">
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">2x Cornbread</div>
                        <div className="text-[1.8rem] font-normal leading -[100%] capitalize">$6.40</div>
                      </div>
                      <div className="mt-[0.8rem] ">
                        <p className="font-light text-[1.4rem] leading-[130%] text-b5b6b6">
                          Cornbread is baked with sugar, flour and eggs. It have low-carb and you don’t need to worry
                          about your weight
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-[14.5rem] border-b-[1.25px] border-secondary bottom-[2rem] left-[50%] translate-x-[-50%] cursor-pointer">
                      <p className="font-light text-[1.8rem] leading-[100%] text-secondary uppercase text-center ">
                        ADD TO CART
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] left-[4rem] z-[2]" onClick={swipePrev}>
          <BsChevronLeft size={36} />
        </button>
        <button className="w-auto h-auto text-[#ACACAC] absolute top-[63.2rem] right-[4rem] z-[2]" onClick={swipeNext}>
          <BsChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}

export default MenuCombo;
