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
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className="w-full desktop:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerAboutUs})` }}
      >
        <p className="font-fahkwang desktop:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] desktop:mb-0">
          About us
        </p>
        <Breadcrumbs />
      </div>
      <div className="bg-fdf9f5 w-full">
        <div className=" container  h-fit desktop:py-[10rem] py-[2rem] ">
          <div className="grid grid-cols-[40.1%_auto] gap-x-[3.2rem] gap-y-[2.4rem]">
            <div className="flex flex-col order-2 desktop:order-1 col-span-2 desktop:col-span-1">
              <div>
                <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
                <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                  ABOUT US
                </p>
              </div>
              <h2 className="font-fahkwang font-normal desktop:text-[4rem] text-[2.2rem] leading-[1] desktop:mt-[3.6rem] mt-[2rem] text-151618 uppercase line-clamp-1">
                OUR PASSION
              </h2>
              <p className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] mt-[1.2rem]">
                Everyone is welcome in our bakeries. We believe in the power of community, in helping those around us
                and living as sustainably as possible. We insist on the finest ingredients, supporting small businesses
                wherever we can, and though we’re always innovating, our baking is based on time-honoured techniques and
                our decades-old starters. Nothing gives us as much pleasure as a freshly baked, lovingly crafted loaf.
                <br></br>
                <br></br>
                We bake by hand with natural ingredients, and whilst we are ordinary people, we want to make
                extraordinary things. We want to play our part to bring humanity back into the food world, back to local
                communities. We can’t imagine doing anything more gratifying than baking our, and your bread.
              </p>
              <a href="#contact" className="desktop:mt-[4rem] mt-[2.4rem] btn-secondary uppercase">
                CONTACT US
              </a>
            </div>
            <div className="grid grid-cols-[40.2%_auto] desktop:gap-x-[3.2rem] gap-x-[1.2rem]  order-1 desktop:order-2 col-span-2 desktop:col-span-1 ">
              <div className="desktop:h-auto h-full">
                <div className="relative w-full desktop:h-auto h-full">
                  <LazyLoadImage src={ourPassion1} alt="" className="w-full h-auto " />
                  <p className="font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary mt-[0.8rem] hidden desktop:block">
                    Extraordinary things
                  </p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="relative">
                  <LazyLoadImage src={ourPassion2} alt="" className="w-full desktop:mb-[3.2rem] mb-[1.2rem]" />
                  <p className="absolute top-[-2.4rem] right-0 font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary hidden desktop:block">
                    for the perfect MEAL
                  </p>
                </div>
                <div className="relative">
                  <LazyLoadImage src={ourPassion3} alt="" className="desktop:w-[72.9%] w-full" />
                  <p
                    className="absolute top-0 left-[calc(72.9%+0.8rem)] font-fahkwang font-normal text-[1.6rem] leading-[100%] text-right uppercase text-secondary hidden desktop:block"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    FOR YOUR SMILE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full desktop:h-[64rem] h-fit bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${sweetBakery})` }}
      >
        <div className="container">
          <div className=" flex flex-col item-start desktop:items-center pt-[4rem] desktop:pt-[6rem] desktop:pb-[31rem] pb-[4.7rem]">
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
            <div className=" flex flex-col desktop:items-center desktop:pt-[6rem] py-[2.4rem]   ">
              <div className="desktop:flex flex-col">
                <span className="text-secondary desktop:text-[3.2rem] text-[1.6rem] leading-[0] inline-block mr-[0.8rem] desktop:mr-0 text-center">
                  —
                </span>
                <p className="font-mukta font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block desktop:block desktop:mt-[0.8rem] uppercase">
                  gallery
                </p>
              </div>
              <h1
                className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] 
              desktop:leading-[100%] leading-[140%] mt-[2rem] text-primary text-left
              uppercase mb-0 desktop:text-center"
              >
                MORE THAN JUST BREADS
              </h1>
              <p
                className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] 
              mt-[1.2rem] desktop:text-center max-w-[59.4rem] desktop:line-clamp-3 line-clamp-5"
              >
                We hope this gives you a sense of Let’s Eat Bakery - what we value and what we strive for. We truly
                enjoy baking our homemade treats for you, and thank you for supporting us for more than 20 years!
              </p>
              <div className="container desktop:mt-[6.9rem] mt-[2.4rem] grid grid-cols-[57.2%_auto] desktop:gap-x-[3.2rem] gap-x-[1.2rem]">
                <div className="flex flex-col">
                  <LazyLoadImage src={gallery1} alt="" className="w-full h-auto desktop:mb-[3.2rem] mb-[1.2rem]" />
                  <div className="grid grid-cols-[40.2%_auto] desktop:gap-x-[3.2rem] gap-x-[1.2rem]">
                    <LazyLoadImage src={gallery3} alt="" className="w-full h-auto" />
                    <LazyLoadImage src={gallery4} alt="" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <LazyLoadImage src={gallery2} alt="" className="w-full h-auto desktop:mb-[3.2rem] mb-[1.2rem]" />
                  <LazyLoadImage src={gallery5} alt="" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full desktop:h-[69.6rem] h-fit bg-no-repeat bg-cover bg-center relative desktop:pt-[37.5rem] desktop:pb-[22.5rem] pt-[15rem] pb-[15rem]"
        style={{ backgroundImage: `url(${sweetBakery2})` }}
      >
        <div className="container h-fit">
          <div className="flex flex-col items-center ">
            <h1 className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] text-f6f4f3 text-center uppercase m-0 max-w-[56.1rem]">
              baking with creativity servering with love
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary desktop:pt-[10rem] desktop:pb-[21.6rem] py-[2.4rem] relative pb-[4.7rem]">
        <div className="container grid grid-cols-2 gap-x-[3.2rem] gap-y-[2.4rem] ">
          <LazyLoadImage src={aboutUs1} alt="" className="desktop:w-auto w-full h-auto col-span-2 desktop:col-span-1" />
          <div className="flex flex-col col-span-2 desktop:col-span-1">
            <div>
              <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
              <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                ABOUT US
              </p>
            </div>
            <h2 className="font-fahkwang font-normal text-f6f4f3 desktop:text-[4rem] text-[2.2rem] leading-[1] desktop:mt-[3.6rem] mt-[2rem]  uppercase line-clamp-1">
              what we do
            </h2>
            <p className="font-light text-[1.6rem] text-white desktop:mt-[2rem] mt-[1.2rem] opacity-80">
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
        <div className="container grid grid-cols-[57.2%_auto] gap-x-[3.2rem] desktop:mt-[10rem] mt-[2.4rem] gap-y-[2.4rem]">
          <div className="flex flex-col col-span-2 desktop:col-span-1 order-2 desktop:order-1">
            <div>
              <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
              <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                ABOUT US
              </p>
            </div>
            <h2 className="font-fahkwang font-normal text-f6f4f3 desktop:text-[4rem] text-[2.2rem] leading-[1] desktop:mt-[3.6rem] mt-[2rem]  uppercase line-clamp-1">
              WRITE THE BEST STORY
            </h2>
            <p className="font-light text-[1.6rem] text-white desktop:mt-[2rem] mt-[1.2rem] opacity-80">
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
            <button className="desktop:mt-[4rem] mt-[2.4rem] btn-secondary uppercase" onClick={() => navigate('/shop')}>
              OUR MENU
            </button>
          </div>
          <div className="flex justify-end col-span-2 desktop:col-span-1 order-1 desktop:order-2">
            <LazyLoadImage src={aboutUs2} alt="" className="desktop:w-auto w-full h-auto " />
          </div>
        </div>
        <div className="container grid grid-cols-2 gap-x-[3.2rem] desktop:mt-[10rem] mt-[2.4rem] gap-y-[2.4rem]">
          <LazyLoadImage src={aboutUs3} alt="" className="desktop:w-auto w-full h-auto col-span-2 desktop:col-span-1" />
          <div className="flex flex-col col-span-2 desktop:col-span-1">
            <div>
              <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
              <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                ABOUT US
              </p>
            </div>
            <h2 className="font-fahkwang font-normal text-f6f4f3 desktop:text-[4rem] text-[2.2rem] leading-[1] desktop:mt-[3.6rem] mt-[2rem] uppercase line-clamp-1">
              out partner
            </h2>
            <p className="font-light text-[1.6rem] text-white desktop:mt-[2rem] mt-[1.2rem] opacity-80">
              We take great pride in the ingredients we use and the network of partners we choose to work with. From
              food and coffee to the art on our walls, we work with like-minded businesses that take as much time and
              care as we do. Kindred spirits, they source mindfully, using traditional methods, yet are always
              innovating, particularly when it comes to sustainability.
            </p>
            <div className="desktop:mt-[5.5rem] mt-[2rem] grid grid-cols-3 desktop:gap-x-[6rem] gap-x-[2rem] max-w-[49.2rem]">
              <img src={logoipsum} alt="" className="w-[16.7rem] h-[7.6rem] " />
              <img src={logoipsum2} alt="" className="w-[16.7rem] h-[7.6rem]" />
              <img src={logoipsum3} alt="" className="w-[16.7rem] h-[7.6rem]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-primary relative" id="contact">
        <div className="panel-layer h-auto desktop:mt-[-9.2rem] desktop:mb-[-13.8rem] z-[1] grid grid-cols-2 gap-x-[3.2rem]">
          <LazyLoadImage src={contactUs} alt="" className="hidden desktop:block" />
          <div className="container col-span-2 desktop:col-span-1">
            <div className="flex flex-col desktop:pt-[6rem] desktop:pr-[4rem] desktop:pb-[4.9rem] py-[2.4rem] ">
              <div>
                <span className="text-secondary mr-[0.8rem] desktop:text-[3.2rem] text-[1.6rem] leading-[0%]">—</span>
                <p className="font-normal desktop:text-[1.8rem] text-[1.4rem] text-secondary inline-block uppercase">
                  leave us a message
                </p>
              </div>
              <h2 className="font-fahkwang font-normal text-primary desktop:text-[4rem] text-[2.2rem] leading-[1] desktop:mt-[3.6rem] mt-[2rem]  uppercase line-clamp-1">
                contact us
              </h2>
              <p className="font-light text-[1.6rem] text-666565 desktop:mt-[2rem] mt-[1.2rem]">
                Tell us your vision and we can help you. Wanna have a perfect meal for your family? Don’t wait and leave
                us your request.
              </p>
              <AboutUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
