import React, { FC, TextareaHTMLAttributes } from 'react';
import check from '@/assets/svg/check_formCheckOut.svg';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  cols?: number;
  rows?: number;
  name: string;
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

const InputTextarea: FC<InputProps> = ({
  cols,
  rows,
  name,
  error,
  label,
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
      <textarea id={name} name={name} cols={cols} rows={rows} {...rest} className={classNameInput} />
      {error && <span className={classNameError}>{error}</span>}
      {touchedFields && !error && (
        <span className={classNameSuccess}>
          <img src={check} alt="" />
        </span>
      )}
    </div>
  );
};

export default InputTextarea;
