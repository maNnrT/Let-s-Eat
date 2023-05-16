import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import { Outlet } from 'react-router-dom';

function DefaultLayout(): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="h-auto w-full">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
