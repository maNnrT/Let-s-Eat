import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
}
function DefaultLayout({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="h-auto w-full">{children}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
