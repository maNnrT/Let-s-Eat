import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: any;
  register?: any;
  touchedFields?: any;
  classNameWrapper?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameError?: string;
}
function Checkbox({
  register,
  name,
  label,
  error,
  classNameWrapper,
  classNameInput,
  classNameLabel,
  classNameError,
  ...rest
}: CheckboxProps) {
  if (register)
    return (
      <div className={classNameWrapper}>
        <label className={classNameLabel} htmlFor={name}>
          {' '}
          {label}
          <input
            {...register(name)}
            type="checkbox"
            id={name}
            name={name}
            className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
            {...rest}
          />
          <span className={`${classNameInput}`}></span>
        </label>
        {error && <p className={classNameError}>{error}</p>}
      </div>
    );
  else {
    return (
      <div className={classNameWrapper}>
        <label className={classNameLabel} htmlFor={name}>
          {' '}
          {label}
          <input
            type="checkbox"
            id={name}
            name={name}
            className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
            {...rest}
          />
          <span className={`${classNameInput}`}></span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
