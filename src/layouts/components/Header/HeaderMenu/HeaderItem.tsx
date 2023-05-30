import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props {
  title: string;
  to: string;
  display?: string;
  onClick?: ()=> void;
}
function HeaderItem({ title, to, display,onClick }: Props) {
  if (display === 'mobile') {
    return (
      <NavLink
        to={to}
        className={(navData) =>
          cx(
            'text-[1.6rem] leading-[100%] mb-[1.6rem] font-medium hover:text-secondary hover:font-bold hover:tracking-[0em] hover:duration-200 w-fit',
            { active: navData.isActive },
          )
        }
        title={title}
        onClick={onClick}
      >
        <span>{title}</span>
      </NavLink>
    );
  }
  return (
    <NavLink
      to={to}
      className={(navData) =>
        cx(
          'text-[1.8rem] leading-[3rem] tracking-[0.03em] p-[1.2rem] font-medium hover:text-secondary hover:font-bold hover:tracking-[0em] hover:duration-200',
          { active: navData.isActive },
        )
      }
      title={title}
    >
      <span>{title}</span>
    </NavLink>
  );
}

export default HeaderItem;
