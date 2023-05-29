import * as React from 'react';

interface Props {
  refDialog: React.RefObject<HTMLDialogElement>;
  title: string;
  img:string
}
function SmallPopup({ refDialog, title, img}: Props) {
  return (
    <dialog className="w-[20rem] h-[20rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" ref={refDialog}>
      <div className="w-auto h-full flex flex-col items-center justify-center p-[2rem]">
        <img src={img} alt="" className="object-cover w-[6rem]" />
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center">{title}</p>
      </div>
    </dialog>
  );
}

export default SmallPopup;
