import NoMatch from '@/pages/NoMatch';
import { DefaultLayout, FooterOnly } from '@/layouts';
// import Homepage from '@/pages/Homepage';
// import AboutUs from '@/pages/AboutUs';
// import Contact from '@/pages/Contact';
// import MenuCombo from '@/pages/MenuCombo';
// import Shop from '@/pages/Shop';
// import Category from '@/pages/Shop/Category';
// import Login from '@/pages/Login';
// import Register from '@/pages/Register';
import config from '@/config/index.tsx';
import { lazy, Suspense } from 'react';
import LoadingFallback from '@/components/LoadingFallback';
const Homepage = lazy(() => import('@/pages/Homepage'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Contact = lazy(() => import('@/pages/Contact'));
const MenuCombo = lazy(() => import('@/pages/MenuCombo'));
const Shop = lazy(() => import('@/pages/Shop'));
const Category = lazy(() => import('@/pages/Shop/Category'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const SearchResult = lazy(() => import('@/pages/Shop/SearchResult'));
export const PublicRoutes = [
  {
    path: '',
    element: <DefaultLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: config.routes.aboutus,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutUs />,
          </Suspense>
        ),
      },
      {
        path: config.routes.contact,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: config.routes.menucombo,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MenuCombo />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.menucombo}/:id`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MenuCombo />,
          </Suspense>
        ),
      },
      {
        path: config.routes.shop,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.shop}/fresh-baked`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Category
              category="fresh-baked"
              description="Freshly baked bread. Natural, crusty, straight from the oven: our fresh bread. Always fresh? Of course! A wide
            choice?"
            />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.shop}/cookies`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Category
              category="cookies"
              description="Freshly cookies. Natural, crusty, straight from the oven: our cookies. Always fresh? Of course! A wide
            choice?"
            />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.shop}/coffee&tea`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Category category="coffee&tea" description="Freshly coffee and tea. A wide choice?" />
          </Suspense>
        ),
      },
      {
        path: `${config.routes.shop}/chessecake`,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Category
              category="chessecake"
              description="Freshly chessecake. Natural, crusty, straight from the oven: our chessecake. Always fresh? Of course! A wide
            choice?"
            />
          </Suspense>
        ),
      },
      {
        path: config.routes.search,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <FooterOnly />,
    errorElement: <NoMatch />,
    children: [
      {
        path: config.routes.login,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: config.routes.register,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
];
