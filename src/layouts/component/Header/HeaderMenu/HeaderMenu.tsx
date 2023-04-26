import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
const cx = classNames.bind(styles);
function HeaderMenu({ children }: any) {
  return <nav className="flex items-center justify-between">{children}</nav>;
}

export default HeaderMenu;
