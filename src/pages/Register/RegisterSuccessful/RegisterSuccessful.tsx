
import { Link } from 'react-router-dom';
import config from '../../../config';
// import classNames from 'classnames/bind';
// import styles from './RegisterSuccessful.module.scss';
// const cx = classNames.bind(styles);
function RegisterSuccessful() {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="font-light text-[3rem] text-666565 mt-[1rem]">
        Sign up succsess!{' '}
      </div>
        <Link to={config.routes.login} className="btn-secondary mt-[1rem]">
          Log in
        </Link>
    </div>
  );
}

export default RegisterSuccessful;
