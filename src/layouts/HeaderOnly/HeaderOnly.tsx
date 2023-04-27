import Header from '../component/Header/Header';
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function HeaderOnly({ children }: any): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export default HeaderOnly;
