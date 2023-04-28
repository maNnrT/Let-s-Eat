import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './RegisterSuccessful.module.scss';
import config from '../../../config';

const cx = classNames.bind(styles);
function RegisterSuccessful() {
  return (
    <div className="font-light text-[1.6rem] text-666565 mt-[1rem]">
      Sign up succsess!{' '}
      <Link to={config.routes.login} className="btn-secondary">
        Log in
      </Link>
    </div>
  );
}

export default RegisterSuccessful;
