import Header from '../component/Header/Header';
import styles from './DefaultLayout.module.scss';
import className from 'classnames';
function DefaultLayout({ children }: any): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export default DefaultLayout;
