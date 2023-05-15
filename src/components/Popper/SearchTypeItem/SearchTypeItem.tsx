import config from '@/config';
import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  name: string;
}
function SearchTypeItem({ name }: Props) {
  let newName = name
  if (name.includes('-')){
    newName = name.replace('-', ' ');
  }else if (name.includes('&')){
    newName = name.replace('&', ' & ');
  }
    return (
      <div className="w-full">
        <Link
          to={`${config.routes.shop}/${name}`}
          className=" py-[0.8rem] px-[2rem] cursor-pointer hover:bg-gray-100 w-full"
        >
          <div className="text-primary text-[1.6rem] capitalize">{name === newName ? name : newName}</div>
        </Link>
      </div>
    );
}

export default SearchTypeItem;
