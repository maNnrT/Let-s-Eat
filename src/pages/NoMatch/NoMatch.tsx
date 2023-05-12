import heroBannerAboutUs from '@/assets/image/HeroBanner_AboutUs.png';
import Footer from '@/layouts/components/Footer/Footer';
import Header from '@/layouts/components/Header/Header';
import { useNavigate } from 'react-router-dom';
function NoMatch() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="h-auto w-full">
        <div className="w-full mb-[-12rem]">
          <div
            className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center z-[1] "
            style={{ backgroundImage: `url(${heroBannerAboutUs})` }}
          >
            <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">
              Opps! Can't find page you're looking for
            </p>
            <button className="btn-secondary mt-[1.8rem]" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoMatch;
