import React from 'react';
interface Props {
  id?: number | undefined;
  name: string;
  onOpen: (id: number | undefined) => void;
}
function SearchDishItem({ id, name, onOpen }: Props) {
  return (
    <div className="">
      <div className=" py-[0.8rem] px-[2rem] cursor-pointer hover:bg-gray-100" onClick={() => onOpen(id)}>
        <div className="text-primary text-[1.6rem]">{name}</div>
      </div>
    </div>
  );
}

export default SearchDishItem;
