import classNames from 'classnames';
import styles from './NoMatch.module.scss';
const cx = classNames.bind(styles);
function NoMatch() {
  return <div className="text-secondary">Page not found</div>;
}

export default NoMatch;
