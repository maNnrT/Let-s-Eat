import React, { FC, InputHTMLAttributes } from 'react';
import check from '@/assets/svg/check_formCheckOut.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
  error?: any;
  register?: any;
  touchedFields?: any;
  classNameWrapper?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameError?: string;
  classNameSuccess?: string;
}

const Input: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  type,
  touchedFields,
  classNameWrapper,
  classNameInput,
  classNameLabel,
  classNameError,
  classNameSuccess,
  ...rest
}) => {
  return (
    <div className={classNameWrapper}>
      {label && (
        <label htmlFor={name} className={classNameLabel}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        {...register(name)}
        {...rest}
        className={`${classNameInput}`}
      />
      {error && <p className={classNameError}>{error}</p>}
      {touchedFields && !error && (
        <span className={classNameSuccess}>
          <img src={check} alt="" />
        </span>
      )}
    </div>
  );
};

export default Input;
