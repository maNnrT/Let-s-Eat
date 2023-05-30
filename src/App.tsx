import './App.css';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import check from '@/assets/svg/check.svg';
import cross from '@/assets/svg/cross.svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  getIdProductModal,
  getIsOpenAddToCart,
  getIsOpenCartUpdateFail,
  getIsOpenCartUpdateSuccess,
  getIsOpenCheckOutSuccess,
  getIsOpenProductDetail,
  getIsOpenSendFormSuccess,
  getIsOpenSignIn,
  getIsOpenSignUp,
} from './redux/selectors';
import ProductDetail from '@/components/ProductDetail';
import React from 'react';
import {
  setOpenCheckOutSuccess,
  setOpenProductDetailFalse,
  setOpenSendFormSuccess,
} from './redux/features/modalSlice/modalSlice';
import { AnimatePresence } from 'framer-motion';
import BigPopup from './components/Popup/BigPopup/BigPopup';
import config from './config';
import SmallPopup from './components/Popup/SmallPopup/SmallPopup';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const idProduct = useSelector(getIdProductModal);
  const isOpenProductDetail = useSelector(getIsOpenProductDetail);
  const isOpenSendForm = useSelector(getIsOpenSendFormSuccess);
  const isOpenCheckOut = useSelector(getIsOpenCheckOutSuccess);
  const isOpenCartUpdateSuccess = useSelector(getIsOpenCartUpdateSuccess);
  const isOpenCartUpdateFail = useSelector(getIsOpenCartUpdateFail);
  const isOpenAddToCart = useSelector(getIsOpenAddToCart);
  const isOpenSignIn = useSelector(getIsOpenSignIn);
  const isOpenSignUp = useSelector(getIsOpenSignUp);
  const location = useLocation();
  React.useMemo(() => {
    if (isOpenProductDetail || isOpenSendForm || isOpenCheckOut) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isOpenProductDetail, isOpenSendForm, isOpenCheckOut]);
  React.useEffect(() => {
    if (isOpenProductDetail) dispatch(setOpenProductDetailFalse());
    if (isOpenSendForm) dispatch(setOpenSendFormSuccess(false));
    if (isOpenCheckOut) dispatch(setOpenCheckOutSuccess(false));
  }, [location.pathname]);
  return (
    <div className="App">
      {/* <ScrollToTop> */}
      <div id="portal">
        <AnimatePresence> {isOpenProductDetail && <ProductDetail id={idProduct} />}</AnimatePresence>
        <AnimatePresence>
          {isOpenSendForm && (
            <BigPopup
              subtitle="thank you"
              title="FOR SENDING US MESSAGE"
              description="We will appreciate your opinion. Please keep an eye on your phone and email to receive feedback from us.
                Don't forget to follow Let's Eat Bakery to receive the latest information. Best regards!"
              to={config.routes.homepage}
              btnTitle="back to homepage"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpenCheckOut && (
            <BigPopup
              subtitle="thank you"
              title="for your ordering"
              description="Thanks for your purchase. We have feeling this is the beginning of beautiful friendship! Don’t forget follow us on social media and stay
                up to date with the lastest information"
              to={config.routes.homepage}
              btnTitle="back to homepage"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpenCartUpdateSuccess && <SmallPopup img={check} title="Cart is updated!" />}
        </AnimatePresence>
        <AnimatePresence>{isOpenCartUpdateFail && <SmallPopup img={cross} title="Cart is empty!" />}</AnimatePresence>
        <AnimatePresence>{isOpenAddToCart && <SmallPopup img={check} title="Add to shopping cart!" />}</AnimatePresence>
        <AnimatePresence>{isOpenSignIn && <SmallPopup img={check} title="Sign in success!" />}</AnimatePresence>
        <AnimatePresence>{isOpenSignUp && <SmallPopup img={check} title="Sign up success!" />}</AnimatePresence>
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
  );
}

export default App;
