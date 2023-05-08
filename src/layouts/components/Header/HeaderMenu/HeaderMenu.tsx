import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);
interface Props {
  children: ReactNode;
}
function HeaderMenu({ children }: Props) {
  return <nav className="flex items-center justify-between">{children}</nav>;
}

export default HeaderMenu;
