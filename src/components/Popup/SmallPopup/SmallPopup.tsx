import * as React from 'react'
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  img: string;
}
function SmallPopup({ title, img }: Props) {
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
        className="bg-[rgba(0,0,0,0.3)] fixed h-full w-full z-[99999] top-0 left-0 right-0 bottom-0 flex justify-center items-center "
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
          className="tablet:w-[20rem] tablet:h-[20rem] w-[15rem] h-[15rem]  bg-fdf9f5 "
        >
          <div className="w-auto h-full flex flex-col items-center justify-center p-[2rem]">
            <img src={img} alt="" className="object-cover w-[6rem] " />
            <p className="font-light tablet:text-[1.8rem] text-[1.4rem] text-666565 mt-[2rem] text-center">{title}</p>
          </div>
        </motion.div>
      </motion.div>,
      el,
    );
  else {
    return null;
  }
}

export default SmallPopup;
