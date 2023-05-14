import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import NoMatch from '@/pages/NoMatch';
import DefaultLayout2 from '@/layouts/DefaultLayout/DefaultLayout';
import { FooterOnly2 } from '@/layouts';
import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import MenuCombo from '@/pages/MenuCombo';
import Shop from '@/pages/Shop';
import FreshBaked from '@/pages/Shop/FreshBaked';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import PrivateRoutes from '@/utils/PrivateRoute.tsx';
import CheckOut from '@/pages/CheckOut/CheckOut.tsx';
import Cart from '@/pages/Cart/Cart.tsx';
import config from '@/config/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        path: '',
        element: <DefaultLayout2 />,
        errorElement: <NoMatch />,
        children: [
          {
            path: '',
            element: <Homepage />,
          },
          {
            path: config.routes.aboutus,
            element: <AboutUs />,
          },
          {
            path: config.routes.contact,
            element: <Contact />,
          },
          {
            path: config.routes.menucombo,
            element: <MenuCombo />,
          },
          {
            path: config.routes.shop,
            element: <Shop />,
          },
          {
            path: `${config.routes.shop}/fresh-baked`,
            element: <FreshBaked />,
          },
        ],
      },
      {
        path: '/',
        element: <FooterOnly2 />,
        errorElement: <NoMatch />,
        children: [
          {
            path: config.routes.login,
            element: <Login />,
          },
          {
            path: config.routes.register,
            element: <Register />,
          },
        ],
      },
      {
        path: '/',
        element: <PrivateRoutes />,
        errorElement: <NoMatch />,
        children: [
          {
            path: '',
            element: <Homepage />,
          },
          {
            path: config.routes.aboutus,
            element: <AboutUs />,
          },
          {
            path: config.routes.contact,
            element: <Contact />,
          },
          {
            path: config.routes.menucombo,
            element: <MenuCombo />,
          },
          {
            path: config.routes.shop,
            element: <Shop />,
          },
          {
            path: `${config.routes.shop}/freshbaked`,
            element: <FreshBaked />,
          },
          {
            path: '/',
            element: <DefaultLayout2 />,
            errorElement: <NoMatch />,
            children: [
              {
                path: `${config.routes.cart}`,
                element: <Cart />,
              },
              {
                path: `${config.routes.cart}${config.routes.checkout}`,
                element: <CheckOut />,
              },
            ],
          },
          {
            path: '/',
            element: <FooterOnly2 />,
            errorElement: <NoMatch />,
            children: [
              {
                path: config.routes.login,
                element: <Login />,
              },
              {
                path: config.routes.register,
                element: <Register />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
