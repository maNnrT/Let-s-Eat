import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props {
  title:string,
  to:string,
}
function HeaderItem({ title, to }: Props) {
  return (
    <NavLink
      to={to}
      className={(navData) =>
        cx('text-[1.8rem] leading-[3rem] tracking-[0.03em] mr-[32px] font-medium hover:text-secondary hover:font-bold hover:tracking-[0rem] hover:duration-200', { active: navData.isActive })
      }
    >
      <span>{title}</span>
    </NavLink>
  );
}

export default HeaderItem;
