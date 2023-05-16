import NoMatch from '@/pages/NoMatch';
import { DefaultLayout } from '@/layouts';
import CheckOut from '@/pages/CheckOut/CheckOut.tsx';
import Cart from '@/pages/Cart/Cart.tsx';
import config from '@/config/index.tsx';
export const PrivateRoutesOnly = [
  {
    path: '/',
    element: <DefaultLayout />,
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
];
