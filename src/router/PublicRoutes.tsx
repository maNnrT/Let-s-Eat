import NoMatch from '@/pages/NoMatch';
import { DefaultLayout, FooterOnly } from '@/layouts';
import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import MenuCombo from '@/pages/MenuCombo';
import Shop from '@/pages/Shop';
import Category from '@/pages/Shop/Category';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import config from '@/config/index.tsx';

export const PublicRoutes = [
  {
    path: '',
    element: <DefaultLayout />,
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
        path: `${config.routes.menucombo}/:id`,
        element: <MenuCombo />,
      },
      {
        path: config.routes.shop,
        element: <Shop />,
      },
      {
        path: `${config.routes.shop}/fresh-baked`,
        element: (
          <Category
            category="fresh-baked"
            description="Freshly baked bread. Natural, crusty, straight from the oven: our fresh bread. Always fresh? Of course! A wide
          choice?"
          />
        ),
      },
      {
        path: `${config.routes.shop}/cookies`,
        element: (
          <Category
            category="cookies"
            description="Freshly cookies. Natural, crusty, straight from the oven: our cookies. Always fresh? Of course! A wide
          choice?"
          />
        ),
      },
      {
        path: `${config.routes.shop}/coffee&tea`,
        element: <Category category="coffee&tea" description="Freshly coffee and tea. A wide choice?" />,
      },
      {
        path: `${config.routes.shop}/chessecake`,
        element: (
          <Category
            category="chessecake"
            description="Freshly chessecake. Natural, crusty, straight from the oven: our chessecake. Always fresh? Of course! A wide
          choice?"
          />
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
        element: <Login />,
      },
      {
        path: config.routes.register,
        element: <Register />,
      },
    ],
  },
];
