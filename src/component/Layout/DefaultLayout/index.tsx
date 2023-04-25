import Header from '../component/Header';
import Footer from './Footer';

function DefaultLayout({ children }: any): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default DefaultLayout;
