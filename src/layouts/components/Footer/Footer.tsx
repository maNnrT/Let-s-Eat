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
    <div className="w-full h-[52rem] bg-primary relative pt-[20rem]">
      <div className="container h-[23.5rem] grid grid-cols-2   bg-transparent">
        <div className=" flex flex-col items-start">
          <img src={logo} alt="" className="w-[17.6rem]" />
          <p className="mt-[2rem] font-light text-[1.6rem] w-[48.9rem] text-717171">
            Today, Let’s Eat is the largest bakery in the New York, however it remains family run. We have a workforce
            of over 1,500 people and the capacity to produce 1 million buns and rolls alone every day.
          </p>
          <p className="w-[48.9rem] mt-[3.2rem] font-medium text-[1.6rem] ">Subcribe to get our letter</p>
          <div className="w-[28rem] h-[4rem] mt-[0.8rem]  border-[1.5px] border-5a5a5a flex justify-between items-center">
            <input
              type="email"
              className="w-[20.8rem] h-full bg-transparent text-[1.6rem] pl-[0.8rem] py-[0.8rem] text-d0d0d0 font-normal placeholder:text-d0d0d0 outline-none"
              placeholder="youremail@gmail.com"
            />
            <button className="w-[7.2rem] h-full btn-secondary font-medium">Submit</button>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-[2.2rem] font-medium mb-[2rem]">Contact</p>
            <div className="w-[28rem] flex mb-[1.2rem]">
              <FaMapMarkerAlt size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] ml-[1rem]">
                90 Broad St. 90 Broad Street, 2nd floor, New York, NY
              </p>
            </div>
            <div className="w-[28rem] flex mb-[1.2rem]">
              <BsFillTelephoneFill size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] ml-[1rem]">(+35) 708 128 5245</p>
            </div>
            <div className="w-[28rem] flex mb-[1.2rem]">
              <MdEmail size={20} color={'#4e4e4e'} />
              <p className="text-d0d0d0 font-light text-[1.6rem] ml-[1rem]">bakery.adamo@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="text-[2.2rem] font-medium mb-[2rem]">Link</p>
            <div className="w-[28rem] flex mb-[1.2rem]">
              <p className="text-d0d0d0 font-light text-[1.6rem]">Term & Condition</p>
            </div>
            <Link to={config.routes.aboutus} className="w-[28rem] flex mb-[1.2rem]">
              <p className="text-d0d0d0 font-light text-[1.6rem]">About us</p>
            </Link>
            <Link to={config.routes.contact} className="w-[28rem] flex mb-[1.2rem]">
              <p className="text-d0d0d0 font-light text-[1.6rem]">Contact</p>
            </Link>
            <Link to={config.routes.shop} className="w-[28rem] flex mb-[1.2rem]">
              <p className="text-d0d0d0 font-light text-[1.6rem]">Shop</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container h-[5.6rem] mt-[2.9rem] border-t-[1px] border-[#424242] flex justify-between items-center">
        <p className="text-[1.2rem] text-717171">Copyright © 2021 by Adamo Software</p>
        <div className="flex">
          <img src={instagram} alt="" className=" cursor-pointer" />
          <img src={linkedin} alt="" className="ml-[2rem] cursor-pointer" />
          <img src={twitter} alt="" className="ml-[2rem] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
