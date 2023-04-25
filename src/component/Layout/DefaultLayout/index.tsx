import Header from '../component/Header';
import Footer from '../component/Footer';
import styles from './DefaultLayout.module.scss';
import className from 'classnames';
const cx = className.bind(styles);
function DefaultLayout({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container h-[2000px] bg-717171">{children}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
