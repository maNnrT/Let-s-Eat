import * as React from 'react';
import { Link } from 'react-router-dom';
import popupImg from '../../assets/svg/image_PopUp.svg';
interface Props {
  subTitle: string;
  title: string;
  description: string;
  to: string;
  btnTitle: string;
  open: boolean;
}
function Popup({ subTitle, title, description, to, btnTitle, open }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  React.useEffect(() => {
    const dialogNode = dialogRef.current;
    if (open && dialogNode) {
      dialogNode.showModal();
    } else if (!open && dialogNode) {
      dialogNode.close();
    }
  }, [open]);
  return (
    <dialog className="w-[80rem] h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" ref={dialogRef}>
      <form className="w-full h-full">
        <div className="flex flex-col items-center h-auto relative pt-[8rem] pb-[12rem] px-[9rem]">
          <span className="text-secondary leading-[0px] text-[3.2rem]">—</span>
          <p className="font-normal text-[1.8rem] text-secondary mt-[0.8rem] uppercase">{subTitle}</p>
          <p className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
            {title}
          </p>
          <img src={popupImg} alt="" className="mt-[5.2rem]" />
          <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center mx-[0.5rem]">{description}</p>
          <Link to={to} className="btn-secondary uppercase mt-[3.6rem] text-white w-[21.1rem]">
            {btnTitle}
          </Link>
          <button
            type="submit"
            formMethod="dialog"
            className="text-666565 text-[6rem] absolute top-[3.2rem] right-[3.2rem] leading-[2.4rem] cursor-pointer"
          >
            &times;
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Popup;
