import React from 'react';
interface Props {
  children: React.ReactNode;
}
function Wrapper({ children }: Props) {
  return (
    <div
      className="w-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] 
    max-h-[min((100vh-9.6rem)-6rem,73.4rem)] min-h-[10rem] mt-[0.8rem]  py-[1.5rem]"
    >
      {children}
    </div>
  );
}

export default Wrapper;
