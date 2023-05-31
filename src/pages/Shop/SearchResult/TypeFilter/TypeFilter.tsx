import * as React from 'react'
import { useDispatch } from 'react-redux';
import { typeFilterChange } from '@/redux/features/filter/filterSlice';
import { useSearchParams } from 'react-router-dom';
const categories = [
  { title: 'All', value: 'all' },
  { title: 'Fresh Baked', value: 'fresh-baked' },
  { title: 'Cookies', value: 'cookies' },
  { title: 'Coffee & Tea', value: 'coffee&tea' },
  { title: 'Chessecake', value: 'chessecake' },
];
interface Props {
  name: string;
}
function TypeFilter({ name }: Props) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    searchParams.set('type', (e.target as HTMLInputElement).value);
    setSearchParams(searchParams);
  };
  React.useEffect(() => {
    dispatch(typeFilterChange(type));
  }, [dispatch, type]);
  return (
    <div className="w-full">
      <p className="text-secondary text-[2rem] desktop:block hidden">Category</p>
      {categories.map((category) => (
        <div key={categories.indexOf(category)} className="desktop:border-b-[1px] desktop:border-secondary">
          <input
            type="radio"
            name={name}
            id={category.value}
            value={category.value}
            className="hidden peer"
            onChange={handleCategoryChange}
            checked={type === category.value}
          />
          <label
            htmlFor={category.value}
            className="block w-full text-left text-666565 px-[1rem] pt-[0.7rem] pb-[0.2rem] text-[1.4rem] desktop:text-[1.6rem] 
            desktop:hover:bg-gray-100 cursor-pointer duration-200 desktop:last-of-type:border-0
            desktop:peer-checked:bg-gray-100 peer-checked:text-secondary peer-checked:font-semibold"
          >
            {category.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TypeFilter;
