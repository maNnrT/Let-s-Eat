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
    <div className="w-full desktop:mb-[-12rem]">
      <div
        className="w-full desktop:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang desktop:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] desktop:mb-0">
          Category
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
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
              Our popular dishes
            </h1>
            <p
              className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] 
                mt-[1.2rem] desktop:text-center max-w-[59.4rem] desktop:line-clamp-3 line-clamp-5"
            >
              With creative and love, we baked a lot sweet breads for you, for your family and for New York. Let's see
              our menu and choose the perfect dishes for your meal.
            </p>
            <div className="container grid desktop:grid-cols-4 grid-cols-1 gap-y-[1.2rem] gap-x-[3.2rem] h-fit desktop:mt-[6rem] desktop:mb-[11.5rem] my-[2.4rem]">
              {categories.map((category) => (
                <div key={categories.indexOf(category)} className="h-auto">
                  <Link
                    to={category.to}
                    className="w-full desktop:h-[41.2rem] h-[20rem] flex justify-center bg-center bg-cover bg-no-repeat items-center cursor-pointer desktop:hover:scale-110 desktop:duration-500"
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
