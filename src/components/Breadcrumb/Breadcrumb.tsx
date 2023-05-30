import config from '@/config';
import { Link, useLocation } from 'react-router-dom';
import { memo } from 'react';
function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      let newCrumb = crumb;
      if (crumb.includes('-')) {
        newCrumb = crumb.replace('-', ' ');
      } else if (crumb.includes('&')) {
        newCrumb = crumb.replace('&', ' & ');
      }
      currentLink += `/${crumb}`;
      return (
        <div className="inline-block " key={crumb}>
          <Link to={currentLink}>
            /
            <p className="hover:text-secondary inline-block first-letter:capitalize">
              {crumb === newCrumb ? crumb : newCrumb}
            </p>
          </Link>
        </div>
      );
    });

  return (
    <div className="font-normal desktop:text-[2.2rem] desktop:leading-[3.7rem] leading-[100%] text-center text-cbcac9  ">
      <Link to={config.routes.homepage} className="hover:text-secondary">
        Home
      </Link>
      {crumbs}
    </div>
  );
}
export default memo(Breadcrumbs);
