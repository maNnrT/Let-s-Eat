import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import { Outlet } from 'react-router-dom';

function DefaultLayout(): JSX.Element {
  return (
    <div className="w-full ">
      <Header />
      <div className="min-h-[50rem] flex justify-center items-center">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
