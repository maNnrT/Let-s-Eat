import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
// "text-[1.8rem] leading-[3rem] tracking-[0.03em] mr-[32px] font-medium active:font-bold active:text-secondary active:tracking-normal"
// {(navData) => cx('text-[1.8rem] leading-[3rem] tracking-[0.03em] mr-[32px] font-medium', {active:navData.isActive})}
function HeaderItem({ title, to }: any) {
  return (
    <NavLink
      to={to}
      className={(navData) =>
        cx('text-[1.8rem] leading-[3rem] tracking-[0.03em] mr-[32px] font-medium', { active: navData.isActive })
      }
    >
      <span>{title}</span>
    </NavLink>
  );
}

export default HeaderItem;
