import { ReactNode } from 'react';
import Footer from '../component/Footer';
import styles from './FooterOnly.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
}
function FooterOnly({ children }: Props): JSX.Element {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default FooterOnly;
