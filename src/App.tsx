import './App.css';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { getIdProductModal, getIsOpenModal } from './redux/selectors';
import ProductDetail from '@/components/ProductDetail';
import React from 'react';
import { setOpenModalFalse } from './redux/features/modalSlice/modalSlice';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const idProduct = useSelector(getIdProductModal);
  const isOpen = useSelector(getIsOpenModal);
  const location = useLocation();

  React.useEffect(() => {
    if (isOpen) dispatch(setOpenModalFalse());
  }, [location.pathname]);
  return (
    <div>
      {isOpen && <ProductDetail id={idProduct} />}
      <div className="App h-fit">
        {/* <ScrollToTop> */}
        <div id="portal"></div>
        <Outlet />
        <ScrollRestoration
          getKey={(location, matches) => {
            const excludePath = '/shop/search';
            // if (location.pathname === excludePath) return location.key;
            return location.pathname;
          }}
        />
        {/* </ScrollToTop> */}
      </div>
    </div>
  );
}

export default App;
