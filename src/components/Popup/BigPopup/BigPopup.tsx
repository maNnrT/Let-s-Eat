import ReactDOM from 'react-dom';
import popupImg from '@/assets/svg/image_PopUp.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setOpenCheckOutSuccess, setOpenSendFormSuccess } from '@/redux/features/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';

interface Props {
  subtitle: string;
  title: string;
  description: string;
  to: string;
  btnTitle: string;
}

function BigPopup({ subtitle, title, description, to, btnTitle }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          className="w-[80rem] m-auto absolute right-0 left-0 h-fit top-[7.5rem] bg-fdf9f5"
        >
          <div className="flex flex-col items-center h-auto relative pt-[8rem] pb-[12rem] px-[9rem]">
            <span className="text-secondary leading-[0px] text-[3.2rem]">—</span>
            <p className="font-normal text-[1.8rem] text-secondary mt-[0.8rem] uppercase">{subtitle}</p>
            <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
              {title}
            </h1>
            <img src={popupImg} alt="" className="mt-[5.2rem]" />
            <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center mx-[0.5rem]">{description}</p>
            <div
              className="btn-secondary uppercase mt-[3.6rem] text-white w-[21.1rem] cursor-pointer"
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
