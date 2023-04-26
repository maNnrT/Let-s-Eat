import config from '../config';

//Layout
import { HeaderOnly } from '../layouts';

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
  { path: config.routes.homepage, component: Homepage },
  { path: config.routes.aboutus, component: AboutUs },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.menucombo, component: MenuCombo },
  { path: config.routes.shop, component: Shop },
  { path: config.routes.nomatch, component: NoMatch },
];
const privateRoutes: pathObject[] = [];

export { publicRoutes, privateRoutes };
