//Layout
import { HeaderOnly } from '../component/Layout';

import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import NoMatch from '../pages/NoMatch';
type pathObject = {
  path: string;
  component: any;
  layout?: any;
};

const publicRoutes: pathObject[] = [
  { path: '/', component: Homepage },
  { path: '/aboutus', component: AboutUs, layout: HeaderOnly },
  { path: '*', component: NoMatch, layout: null },
];
const privateRoutes: pathObject[] = [];

export { publicRoutes, privateRoutes };
