import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import Slider from './Slider/Slider';
const cx = classNames.bind(styles);
function Homepage() {
  return <Slider />;
}

export default Homepage;
