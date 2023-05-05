import { ReactNode } from 'react';
import Header from '../component/Header/Header';
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
}
function HeaderOnly({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export default HeaderOnly;
