import NoMatch from '@/pages/NoMatch';
import { DefaultLayout } from '@/layouts';
import CheckOut from '@/pages/CheckOut/CheckOut.tsx';
import Cart from '@/pages/Cart/Cart.tsx';
import config from '@/config/index.tsx';
import { Suspense } from 'react';
import LoadingFallback from '@/components/LoadingFallback/LoadingFallback';
export const PrivateRoutesOnly = [
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: `${config.routes.cart}`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.cart}${config.routes.checkout}`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CheckOut />
          </Suspense>
        ),
      },
    ],
  },
];
