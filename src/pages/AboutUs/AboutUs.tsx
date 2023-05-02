import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
const cx = classNames.bind(styles);
import heroBannerAboutUs from '../../assets/image/HeroBanner_AboutUs.png';
function AboutUs() {
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerAboutUs})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">MENU COMBO</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/About us</p>
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

        
      </div>
    </div>
  );
}

export default AboutUs;
