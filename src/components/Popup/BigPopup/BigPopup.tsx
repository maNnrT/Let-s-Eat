import ReactDOM from 'react-dom';
import popupImg from '@/assets/svg/image_PopUp.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setOpenCheckOutSuccess, setOpenSendFormSuccess } from '@/redux/features/modalSlice/modalSlice';
import { useAppDispatch } from '@/hooks/reduxHooks';

interface Props {
  subtitle: string;
  title: string;
  description: string;
  to: string;
  btnTitle: string;
}

function BigPopup({ subtitle, title, description, to, btnTitle }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigateBtn = () => {
    setTimeout(() => navigate(to), 1000);
    dispatch(setOpenSendFormSuccess(false));
    dispatch(setOpenCheckOutSuccess(false));
  };
  const el = document.getElementById('portal');
  if (el)
    return ReactDOM.createPortal(
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className="bg-[rgba(0,0,0,0.3)] fixed h-full w-full z-[99999] top-0 left-0 right-0 bottom-0  "
      >
        <motion.div
          initial={{
            scale: 0.5,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            scale: 0.5,
            transition: {
              duration: 0.3,
            },
          }}
          className="desktop:w-[80rem] w-[100vw] m-auto absolute right-0 left-0 h-fit desktop:top-[7.5rem] top-[50%] bottom-[50%] bg-fdf9f5 "
        >
          <div className="container flex flex-col items-center h-auto relative desktop:pt-[8rem] pt-[2.4rem] desktop:pb-[12rem] pb-[2.4rem] desktop:px-[9rem]">
            <span className="text-secondary leading-[0px] desktop:text-[3.2rem] text-[1.6rem]">—</span>
            <p className="font-normal desktop:text-[1.8rem] text-[1.6rem] text-secondary mt-[0.8rem] uppercase">
              {subtitle}
            </p>
            <h1 className="font-fahkwang font-normal desktop:text-[4rem] text-[2rem] leading-[100%] desktop:mt-[2rem] mt-[1.2rem] text-primary text-center uppercase mb-0">
              {title}
            </h1>
            <img src={popupImg} alt="" className="desktop:mt-[5.2rem] mt-[2.4rem]" />
            <p className="font-light desktop:text-[1.8rem] text-[1.6rem] text-666565 mt-[2rem] text-center mx-[0.5rem]">
              {description}
            </p>
            <div
              className="btn-secondary uppercase mt-[3.6rem] text-white w-[21.1rem] cursor-pointer text-[1.6rem] desktop:text-[1.8rem]"
              onClick={handleNavigateBtn}
            >
              {btnTitle}
            </div>
          </div>
        </motion.div>
      </motion.div>,
      el,
    );
  else {
    return null;
  }
}

export default BigPopup;
