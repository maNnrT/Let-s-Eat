import config from '@/config';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="inline-block" key={crumb}>
          <Link to={currentLink}>{ crumb.includes('-')? crumb = '/'+crumb.replace('-', ' '):'/'+crumb}</Link>
        </div>
      );
    });

  return (
    <div className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9 capitalize">
      <Link to={config.routes.homepage}>Home</Link>
      {crumbs}
    </div>
  );
}
export default Breadcrumbs;
