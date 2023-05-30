import Footer from '@/layouts/components/Footer';
import { Outlet } from 'react-router-dom';

function FooterOnly(): JSX.Element {
  return (
    <>
      <div className="min-h-[50rem]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
export default FooterOnly;
