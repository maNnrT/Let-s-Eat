import logo from '@/assets/svg/Logo_white.svg';
import instagram from '@/assets/svg/insta_Footer.svg';
import linkedin from '@/assets/svg/linkedin_Footer.svg';
import twitter from '@/assets/svg/twitter_Footer.svg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import config from '@/config';
import { Link } from 'react-router-dom';

function Footer(): JSX.Element {
  return (
    <div className="w-full desktop:h-[52rem] h-fit bg-primary relative desktop:pt-[20rem] pt-[6rem]">
      <div className="container h-fit grid  grid-cols-2 bg-transparent">
        <div className=" flex flex-col items-start col-span-2 desktop:col-span-1">
          <img src={logo} alt="" className="desktop:w-[17.6rem] w-[13.2rem]" />
          <p className="mt-[2rem] font-light text-[1.6rem] desktop:w-[48.9rem] text-717171 w-full line-clamp-5">
            Today, Let’s Eat is the largest bakery in the New York, however it remains family run. We have a workforce
            of over 1,500 people and the capacity to produce 1 million buns and rolls alone every day.
          </p>
          <p className="w-full desktop:mt-[3.2rem] mt-[1.2rem] font-medium text-[1.6rem] leading-[150%]">
            Subcribe to get our letter
          </p>
          <div className="desktop:w-[28rem] w-full h-[4rem] mt-[0.8rem] border-[1.5px] border-5a5a5a flex justify-between items-center">
            <input
              type="email"
              className="flex-1 h-full bg-transparent desktop:text-[1.6rem] text-[1.4rem] pl-[0.8rem] py-[0.8rem] text-d0d0d0 font-normal placeholder:text-d0d0d0 outline-none"
              placeholder="youremail@gmail.com"
            />
            <button className="w-[7.2rem] h-full btn-secondary font-medium">Submit</button>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 desktop:col-span-1 mt-[2.8rem] desktop:mt-0 gap-x-[3.2rem] gap-y-[2.8rem]">
          <div className="col-span-2 desktop:col-span-1">
            <p className="desktop:text-[2.2rem] text-[1.8rem] font-medium desktop:mb-[2rem] mb-[1.2rem]">Contact</p>
            <div className="w-full flex desktop:mb-[1.2rem] mb-[0.8rem]">
              <FaMapMarkerAlt size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] desktop:ml-[1rem] ml-[1.4rem]">
                90 Broad St. 90 Broad Street, 2nd floor, New York, NY
              </p>
            </div>
            <div className="w-full flex desktop:mb-[1.2rem] mb-[0.8rem]">
              <BsFillTelephoneFill size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] desktop:ml-[1rem] ml-[1.4rem]">(+35) 708 128 5245</p>
            </div>
            <div className="w-full flex ">
              <MdEmail size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] desktop:ml-[1rem] ml-[1.4rem]">
                bakery.adamo@gmail.com
              </p>
            </div>
          </div>
          <div className="col-span-2 desktop:col-span-1">
            <p className="desktop:text-[2.2rem] text-[1.8rem] font-medium desktop:mb-[2rem] mb-[1.2rem] ">Link</p>
            <div className=" grid grid-cols-2 desktop:block gap-y-[1.2rem]">
              <div className="w-full flex desktop:mb-[1.2rem] ">
                <p className="text-d0d0d0 font-semibold text-[1.6rem]">Term & Condition</p>
              </div>
              <Link to={config.routes.aboutus} className="w-full flex desktop:mb-[1.2rem] ">
                <p className="text-d0d0d0 font-semibold text-[1.6rem]">About us</p>
              </Link>
              <Link to={config.routes.contact} className="w-full flex desktop:mb-[1.2rem] ">
                <p className="text-d0d0d0 font-semibold text-[1.6rem]">Contact</p>
              </Link>
              <Link to={config.routes.shop} className="w-full flex desktop:mb-[1.2rem] ">
                <p className="text-d0d0d0 font-semibold text-[1.6rem]">Shop</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container h-[5.6rem] desktop:mt-[2.9rem] mt-[2.4rem] border-t-[1px] border-[#424242] flex justify-between items-center">
        <p className="text-[1.2rem] text-717171">Copyright © 2021 by Adamo Software</p>
        <div className="flex">
          <img
            src={instagram}
            alt=""
            className=" cursor-pointer w-[2rem] h-[2rem] desktop:w-[3.2rem] desktop:h-[3.2rem]"
          />
          <img
            src={linkedin}
            alt=""
            className=" table:ml-[2rem] ml-[1.2rem] cursor-pointer w-[2rem] h-[2rem] desktop:w-[3.2rem] desktop:h-[3.2rem]"
          />
          <img
            src={twitter}
            alt=""
            className=" table:ml-[2rem] ml-[1.2rem] cursor-pointer w-[2rem] h-[2rem] desktop:w-[3.2rem] desktop:h-[3.2rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
