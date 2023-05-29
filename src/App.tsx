import './App.css';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { useDispatch, useSelector } from 'react-redux';
import { getIdProductModal, getIsOpenModal } from './redux/selectors';
import ProductDetail from '@/components/ProductDetail';
import React from 'react';
import { setOpenModalFalse } from './redux/features/modalSlice/modalSlice';
import { AnimatePresence } from 'framer-motion';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const idProduct = useSelector(getIdProductModal);
  const isOpen = useSelector(getIsOpenModal);
  const location = useLocation();
  const isScroll = React.useMemo(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  },[isOpen]);
  React.useEffect(() => {
    if (isOpen) dispatch(setOpenModalFalse());
  }, [location.pathname]);
  return (
    <div>
      <div className="App">
        {/* <ScrollToTop> */}
        <div id="portal">
          <AnimatePresence> {isOpen && <ProductDetail id={idProduct} />}</AnimatePresence>
        </div>
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
