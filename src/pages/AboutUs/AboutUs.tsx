import * as React from 'react';
import heroBannerAboutUs from '@/assets/image/HeroBanner_AboutUs.png';
import ourPassion1 from '@/assets/image/image34.png';
import ourPassion2 from '@/assets/image/image35.png';
import ourPassion3 from '@/assets/image/image36.png';
import sweetBakery from '@/assets/image/image38.png';
import gallery1 from '@/assets/image/image39.png';
import gallery2 from '@/assets/image/image40.png';
import gallery3 from '@/assets/image/image41.png';
import gallery4 from '@/assets/image/image42.png';
import gallery5 from '@/assets/image/image43.png';
import sweetBakery2 from '@/assets/image/image44.png';
import aboutUs1 from '@/assets/image/image45.png';
import aboutUs2 from '@/assets/image/image46.png';
import aboutUs3 from '@/assets/image/image47.png';
import logoipsum from '@/assets/svg/logoipsum.svg';
import logoipsum2 from '@/assets/svg/logoipsum2.svg';
import logoipsum3 from '@/assets/svg/logoipsum3.svg';
import contactUs from '@/assets/image/image48.png';
import { useNavigate } from 'react-router-dom';
import AboutUsForm from './AboutUsForm';
import config from '@/config';
import BigPopup from '@/components/Popup/BigPopup/';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
function AboutUs() {
  const navigate = useNavigate();
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
  };
  return (
    <div className="w-full">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerAboutUs})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">About us</p>
        <Breadcrumbs/>
      </div>
      <div className="w-full h-fit px-[11.2rem] py-[10rem] bg-fdf9f5 ">
        <div className="container grid grid-cols-[40.1%_auto] gap-x-[3.2rem]">
          <div className="flex flex-col">
            <div>
              <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0%]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary inline-block">ABOUT US</p>
            </div>
            <h2 className="font-fahkwang font-normal text-[4rem] leading-[1] mt-[3.6rem] text-151618 uppercase">
              OUR PASSION
            </h2>
            <p className="font-light text-[1.6rem] text-666565 mt-[2rem]">
              Everyone is welcome in our bakeries. We believe in the power of community, in helping those around us and
              living as sustainably as possible. We insist on the finest ingredients, supporting small businesses
              wherever we can, and though we’re always innovating, our baking is based on time-honoured techniques and
              our decades-old starters. Nothing gives us as much pleasure as a freshly baked, lovingly crafted loaf.
              <br></br>
              <br></br>
              We bake by hand with natural ingredients, and whilst we are ordinary people, we want to make extraordinary
              things. We want to play our part to bring humanity back into the food world, back to local communities. We
              can’t imagine doing anything more gratifying than baking our, and your bread.
            </p>
            <a href="#contact" className="mt-[4rem] btn-secondary uppercase">
              CONTACT US
            </a>
          </div>
          <div className="grid grid-cols-[40.2%_auto] gap-x-[3.2rem]">
            <div className="h-auto">
              <div className="relative w-full h-auto">
                <img src={ourPassion1} alt="" className="w-full h-auto" />
                <p className="font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary mt-[0.8rem]">
                  Extraordinary things
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="relative">
                <img src={ourPassion2} alt="" className="w-full mb-[3.2rem]" />
                <p className="absolute top-[-2.4rem] right-0 font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary">
                  for the perfect MEAL
                </p>
              </div>
              <div className="relative">
                <img src={ourPassion3} alt="" className="w-[72.9%]" />
                <p
                  className="absolute top-0 left-[calc(72.9%+0.8rem)] font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  FOR YOUR SMILE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[64rem] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${sweetBakery})` }}
      >
        <div className="container">
          <div className=" flex flex-col items-center pt-[6rem] pb-[31rem]">
            <span className="text-secondary text-[3.2rem] leading-[0px]">—</span>
            <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem]">ABOUT US</p>
            <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-f6f4f3 text-center uppercase mb-0">
              Sweet Bakery
            </h1>
            <p className="font-light text-[1.6rem] mt-[2rem] text-center max-w-[79.4rem] text-white/80">
              We believe in making good bread. As we’ve grown, so has our menu and our community, yet our values have
              stayed the same. We take the time to make our bread, pastries, cakes, breakfasts and lunches as we always
              have – with care, by hand and according to the season – so that we don’t need to compromise on what we
              eat, whether we’re on the go, or taking time out in one of our bakeries.
            </p>

            <div className="grid grid-cols-4 mt-[8rem] w-full gap-x-[3.2rem] ">
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
        <div className="panel-layer mt-[-9.2rem] mb-[-13.8rem] z-[1] relative flex flex-col items-center bg-fdf9f5 pb-[4.4rem]">
          <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
          <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">GALLERY</p>
          <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
            MORE THAN JUST BREADS
          </h1>
          <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
            We hope this gives you a sense of Let’s Eat Bakery - what we value and what we strive for. We truly enjoy
            baking our homemade treats for you, and thank you for supporting us for more than 20 years!
          </p>
          <div className="container mt-[6.9rem] grid grid-cols-[57.2%_auto] gap-x-[3.2rem]">
            <div className="flex flex-col">
              <img src={gallery1} alt="" className="w-full h-auto mb-[3.2rem]" />
              <div className="grid grid-cols-[40.2%_auto] gap-x-[3.2rem]">
                <img src={gallery3} alt="" className="w-full h-auto" />
                <img src={gallery4} alt="" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <img src={gallery2} alt="" className="w-full h-auto mb-[3.2rem]" />
              <img src={gallery5} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[69.6rem] bg-no-repeat bg-cover bg-center relative pt-[37.5rem] pb-[22.5rem]"
        style={{ backgroundImage: `url(${sweetBakery2})` }}
      >
        <div className="container h-fit">
          <div className="flex flex-col items-center ">
            <h1 className="font-fahkwang font-normal text-[4rem] text-f6f4f3 text-center uppercase m-0 w-[56.1rem]">
              baking with creativity servering with love
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary pt-[10rem] pb-[21.6rem] relative">
        <div className="container grid grid-cols-2 gap-x-[3.2rem] ">
          <img src={aboutUs1} alt="" className="w-auto h-auto" />
          <div className="flex flex-col">
            <div>
              <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0%]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary inline-block">ABOUT US</p>
            </div>
            <h2 className=" text-f6f4f3 font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] uppercase">
              WHAT WE DO
            </h2>
            <p className="font-light text-[1.6rem] text-white mt-[2rem] opacity-80">
              In an era driven by convenience and competition from mega-markets and chain stores, Let's Eat Bakery has
              endured because it is far more than a retailer of baked goods - it is a memorable destination experience
              and a nostalgic reminder of the charms of independent bakeries that were once a part of the fabric of
              every community.
              <br />
              <br />
              Everyday, we transform the best natural ingredients like real butter, fresh eggs and organic flour into
              more than 500 different pastries, cakes, cookies, breads, sandwiches and entreés. Even the mayonnaise is
              made from scratch! Freshness in the food business can be a relative term. To us it means daily or hourly.
            </p>
          </div>
        </div>
        <div className="container grid grid-cols-[57.2%_auto] gap-x-[3.2rem] mt-[10rem]">
          <div className="flex flex-col">
            <div>
              <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0%]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary inline-block">ABOUT US</p>
            </div>
            <h2 className=" text-f6f4f3 font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] uppercase">
              WHAT WE DO
            </h2>
            <p className="font-light text-[1.6rem] text-white mt-[2rem] opacity-80">
              Grogan had a vision to create a bakery and provisions shop where everything was made by using traditional,
              time-honoured recipes and techniques with the best ingredients available. Local where possible and often
              organic. No shortcuts.
              <br />
              <br />
              Since 1994, Grogan and his amazing team of chefs and bakers have not wavered from those founding
              principles and continue to deliver delicious award-winning food that is traditional, handmade and natural.
              In 2000 Let’s Eat Bakery opened its doors with 80 employees to provide the region with Euro Bread, Buns,
              Rolls, speciality breads, sweets, coffee and tea.
              <br />
              <br />
              Over the past 20 years Let’s Eat Bakery has grown to become one of the largest commercial bakers in the
              New York, known for serving high quality, great tasting and affordable food.
              <br />
              <br />
              Today, Let’s Eat is the largest bakery in the New York, however it remains family run. We have a workforce
              of over 1,500 people and the capacity to produce 1 million buns and rolls alone every day.
            </p>
            <button className="mt-[4rem] btn-secondary uppercase" onClick={() => navigate('/shop')}>
              OUR MENU
            </button>
          </div>
          <div className="flex justify-end">
            <img src={aboutUs2} alt="" className="w-auto h-auto " />
          </div>
        </div>
        <div className="container grid grid-cols-2 gap-x-[3.2rem] mt-[10rem] ">
          <img src={aboutUs3} alt="" className="w-auto h-auto" />
          <div className="flex flex-col">
            <div>
              <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0%]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary inline-block">ABOUT US</p>
            </div>
            <h2 className=" text-f6f4f3 font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] uppercase">
              OUR PARTNER
            </h2>
            <p className="font-light text-[1.6rem] text-white mt-[2rem] opacity-80">
              We take great pride in the ingredients we use and the network of partners we choose to work with. From
              food and coffee to the art on our walls, we work with like-minded businesses that take as much time and
              care as we do. Kindred spirits, they source mindfully, using traditional methods, yet are always
              innovating, particularly when it comes to sustainability.
            </p>
            <div className="mt-[5.5rem] flex items-center justify-between w-[49.2rem] h-[7.6rem]">
              <img src={logoipsum} alt="" className="w-auto" />
              <img src={logoipsum2} alt="" className="w-auto" />
              <img src={logoipsum3} alt="" className="w-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary relative" id="contact">
        <BigPopup
          subtitle="thank you"
          title="FOR SENDING US MESSAGE"
          description="We will appreciate your opinion. Please keep an eye on your phone and email to receive feedback from us.
                Don't forget to follow Let's Eat Bakery to receive the latest information. Best regards!"
          to={config.routes.homepage}
          btnTitle="back to homepage"
          refDialog={refDialog}
        ></BigPopup>
        <div className="panel-layer h-auto mt-[-9.2rem] mb-[-13.8rem] z-[1] grid grid-cols-2 gap-x-[3.2rem]">
          <img src={contactUs} alt="" />
          <div className="flex flex-col pt-[6rem] pr-[4rem] pb-[4.9rem]">
            <div>
              <span className="text-secondary mr-[0.8rem] text-[3.2rem] leading-[0%]">—</span>
              <p className="font-normal text-[1.8rem] text-secondary inline-block uppercase">LEAVE US A MESSAGE</p>
            </div>
            <h2 className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 uppercase">
              contact us
            </h2>
            <p className="font-light text-[1.6rem] text-666565 mt-[2rem]">
              Tell us your vision and we can help you. Wanna have a perfect meal for your family? Don’t wait and leave
              us your request.
            </p>
            <AboutUsForm openModal={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
