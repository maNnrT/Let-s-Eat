import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

import heroBannerCategory from '@/assets/image/HeroBanner_Category.png';
import cookieImg from '@/assets/image/image10.png';
import coffeeTeaImg from '@/assets/image/image11.png';
import freshBakedImg from '@/assets/image/image12.png';
import cheeseCake from '@/assets/image/image13.png';
import { Link } from 'react-router-dom';
import config from '@/config';
const cx = classNames.bind(styles);
const categories = [
  { title: 'Fresh Baked', to: config.routes.shop_freshbaked, img: freshBakedImg },
  { title: 'Cookies', to: config.routes.shop_cookies, img: cookieImg },
  { title: 'Coffee & Tea', to: config.routes.shop_coffeeTea, img: coffeeTeaImg },
  { title: 'Chessecake', to: config.routes.shop_chessecake, img: cheeseCake },
];
function Shop() {
  return (
    <div className="w-full mb-[-12rem]">
      <div
        className="w-full h-[60rem] bg-center bg-cover bg-no-repeat relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCategory})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Category</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Shop</p>
      </div>
      <div className="w-full h-fit flex flex-col items-center bg-fdf9f5 relative z-[1] ">
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Our menu</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          Our popular dishes
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          With creative and love, we baked a lot sweet breads for you, for your family and for New York. Let's see our
          menu and choose the perfect dishes for your meal.
        </p>
        <div className="container grid grid-cols-4 gap-x-[3.2rem] h-fit mt-[6rem] mb-[11.5rem]">
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
  );
}

export default Shop;
