import config from '@/config';
import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  id?: number | undefined;
  name: string;
}
function SearchTypeItem({ id, name }: Props) {
  let newName = name;
  if (name.includes('-')) {
    newName = name.replace('-', ' ');
  } else if (name.includes('&')) {
    newName = name.replace('&', ' & ');
  }
  if (!id)
    return (
      <div className="w-full">
        <Link
          to={`${config.routes.shop}/${name}`}
          className=" py-[0.8rem] px-[3rem] cursor-pointer hover:bg-gray-100 w-full"
        >
          <div className="text-primary text-[1.6rem] capitalize">{name === newName ? name : newName}</div>
        </Link>
      </div>
    );
  else {
    return (
      <div className="w-full">
        <Link
          to={`${config.routes.menucombo}/${id}`}
          className=" py-[0.8rem] px-[3rem] cursor-pointer hover:bg-gray-100 w-full"
        >
          <div className="text-primary text-[1.6rem] capitalize">{name === newName ? name : newName}</div>
        </Link>
      </div>
    );
  }
}

export default SearchTypeItem;
