import Header from '../component/Header';
import Footer from '../component/Footer';

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
