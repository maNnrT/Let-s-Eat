import { setOpenProductDetailTrue } from '@/redux/features/modalSlice/modalSlice';
import { useDispatch } from 'react-redux';

interface Props {
  id?: number | undefined;
  name: string;
  // onOpen: (id: number | undefined) => void;
}
function SearchDishItem({ id, name }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div
        className=" py-[0.8rem] px-[3rem] cursor-pointer hover:bg-gray-100 duration-200"
        onClick={() => {
          dispatch(setOpenProductDetailTrue(id));
        }}
      >
        <div className="text-primary text-[1.6rem]">{name}</div>
      </div>
    </div>
  );
}

export default SearchDishItem;
