import Header from '../component/Header';
import Footer from '../component/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="h-auto w-full">{children}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
