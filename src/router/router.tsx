import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import NoMatch from '@/pages/NoMatch';
import PrivateRoutes from '@/utils/PrivateRoute.tsx';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutesOnly } from './PrivateRoutesOnly';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      ...PublicRoutes,
      {
        path: '/',
        element: <PrivateRoutes />,
        errorElement: <NoMatch />,
        children: [...PublicRoutes, ...PrivateRoutesOnly],
      },
    ],
  },
]);
