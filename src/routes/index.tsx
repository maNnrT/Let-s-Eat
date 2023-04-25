//Layout
import { HeaderOnly } from '../component/Layout';

import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import MenuCombo from '../pages/MenuCombo';
import Shop from '../pages/Shop';

import NoMatch from '../pages/NoMatch';
type pathObject = {
  path: string;
  component: any;
  layout?: any;
};

const publicRoutes: pathObject[] = [
  { path: '/', component: Homepage },
  { path: '/aboutus', component: AboutUs },
  { path: '/contact', component: Contact },
  { path: '/menucombo', component: MenuCombo },
  { path: '/shop', component: Shop },
  { path: '*', component: NoMatch},
];
const privateRoutes: pathObject[] = [];

export { publicRoutes, privateRoutes };
