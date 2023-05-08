import config from '@/config';

//Layout
import { FooterOnly } from '@/layouts';

import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import MenuCombo from '@/pages/MenuCombo';
import Shop from '@/pages/Shop';
import FreshBaked from '@/pages/Shop/FreshBaked';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import NoMatch from '@/pages/NoMatch';
import Cart from '@/pages/Cart';
import CheckOut from '@/pages/CheckOut';
type pathObject = {
  path: string;
  component: () => JSX.Element;
  layout?: ({ children }: any) => JSX.Element;
};
const publicRoutes: pathObject[] = [
  { path: config.routes.homepage, component: Homepage },
  { path: config.routes.aboutus, component: AboutUs },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.menucombo, component: MenuCombo },
  { path: config.routes.shop, component: Shop },
  { path: config.routes.shop_freshbaked, component: FreshBaked },
  { path: config.routes.login, component: Login, layout: FooterOnly },
  { path: config.routes.register, component: Register, layout: FooterOnly },
  { path: config.routes.nomatch, component: NoMatch },
];
const privateRoutes: pathObject[] = [
  {
    path: config.routes.cart,
    component: Cart,
  },
  {
    path: config.routes.checkout,
    component: CheckOut,
  },
];

export { publicRoutes, privateRoutes };
