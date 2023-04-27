import Footer from '../component/Footer';
import styles from './FooterOnly.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function FooterOnly({ children }:any): JSX.Element {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default FooterOnly;
