import heroBannerCategory from '@/assets/image/HeroBanner_Category.png';
import cookieImg from '@/assets/image/image10.png';
import coffeeTeaImg from '@/assets/image/image11.png';
import freshBakedImg from '@/assets/image/image12.png';
import cheeseCake from '@/assets/image/image13.png';
import { Link } from 'react-router-dom';
import config from '@/config';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import React from 'react';
const categories = [
  { title: 'Fresh Baked', to: `${config.routes.shop}/fresh-baked`, img: freshBakedImg },
  { title: 'Cookies', to: `${config.routes.shop}/cookies`, img: cookieImg },
  { title: 'Coffee & Tea', to: `${config.routes.shop}/coffee&tea`, img: coffeeTeaImg },
  { title: 'Chessecake', to: `${config.routes.shop}/chessecake`, img: cheeseCake },
];
function Shop() {
  React.useEffect(() => {
    window.scrollTo(0, 550);
  });
  return (
    <div className="w-full tablet:mb-[-12rem]">
      <div
        className="w-full tablet:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang tablet:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] tablet:mb-0">
          Category
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <div className="container">
          <div className=" flex flex-col tablet:items-center tablet:pt-[6rem] pt-[2.4rem]  ">
            <div className="tablet:flex flex-col">
              <span className="text-secondary tablet:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] tablet:mr-0 text-center">
                —
              </span>
              <p className="font-mukta font-normal tablet:text-[1.8rem] text-[1.4rem] text-secondary inline-block tablet:block tablet:mt-[0.8rem] uppercase">
                our menu
              </p>
            </div>
            <h1
              className="font-fahkwang font-normal tablet:text-[4rem] text-[2rem] 
                tablet:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
                uppercase mb-0 tablet:text-center"
            >
              Our popular dishes
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 tablet:mt-[2rem] 
                mt-[1.2rem] tablet:text-center max-w-[59.4rem] tablet:line-clamp-3 line-clamp-5"
            >
              With creative and love, we baked a lot sweet breads for you, for your family and for New York. Let's see
              our menu and choose the perfect dishes for your meal.
            </p>
            <div className="container grid tablet:grid-cols-4 grid-cols-1 gap-y-[1.2rem] gap-x-[3.2rem] h-fit tablet:mt-[6rem] tablet:mb-[11.5rem] my-[2.4rem]">
              {categories.map((category) => (
                <div key={categories.indexOf(category)} className="h-auto">
                  <Link
                    to={category.to}
                    className="w-full h-[41.2rem] flex justify-center bg-center bg-cover bg-no-repeat items-center cursor-pointer hover:scale-110 duration-500"
                    style={{ backgroundImage: `url(${category.img})` }}
                  >
                    <p className="font-fahkwang font-semibold text-[2.2rem] leading-[100%] uppercase text-center">
                      {category.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
