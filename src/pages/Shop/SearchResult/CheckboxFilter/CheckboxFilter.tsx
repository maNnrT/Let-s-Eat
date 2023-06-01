import * as React from 'react';
import Checkbox from '@/components/Checkbox/Checkbox';
import { comboFilterChange, productFilterChange } from '@/redux/features/filter/filterSlice';
// import { getComboFilterSelector, getProductFilterSelector } from '@/redux/selectors';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useSearchParams } from 'react-router-dom';

function CheckboxFilter() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isComboChecked = searchParams.get('combo');
  // const isComboChecked: boolean = useAppSelector(getComboFilterSelector);
  const handleComboCheck = () => {
    // dispatch(comboFilterChange(!(isComboChecked ==='true')));
    searchParams.set('combo', (!(isComboChecked === 'true')).toString());
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };
  const isProductChecked = searchParams.get('product');

  // const isProductChecked: boolean = useAppSelector(getProductFilterSelector);
  const handleProductCheck = () => {
    // dispatch(productFilterChange(!isProductChecked));
    searchParams.set('product', (!(isProductChecked === 'true')).toString());
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };
  React.useEffect(() => {
    dispatch(productFilterChange(isProductChecked === 'true'));
  }, [dispatch, isProductChecked]);
  React.useEffect(() => {
    dispatch(comboFilterChange(isComboChecked === 'true'));
  }, [dispatch, isComboChecked]);
  return (
    <div className="desktop:mt-[4rem]  mt-[1.2rem] w-full flex desktop:block ">
      <Checkbox
        label="Combo"
        checked={isComboChecked === 'true'}
        onChange={handleComboCheck}
        name="combo"
        classNameLabel="relative text-secondary desktop:text-[2rem] text-[1.6rem] flex justify-between w-full items-center cursor-pointer"
        classNameInput="checkbox"
        classNameWrapper="w-full"
      />
      <Checkbox
        label="Product"
        checked={isProductChecked === 'true'}
        onChange={handleProductCheck}
        name="product"
        classNameLabel="relative text-secondary desktop:text-[2rem] text-[1.6rem] flex justify-between w-full items-center cursor-pointer"
        classNameInput="checkbox"
        classNameWrapper="desktop:mt-[2rem] desktop:ml-0 ml-[2rem] w-full"
      />
    </div>
  );
}

export default CheckboxFilter;
