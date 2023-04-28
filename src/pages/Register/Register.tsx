// import classNames from 'classnames/bind';
// import styles from './Register.module.scss';
// const cx = classNames.bind(styles);
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from '../../config';
import { Link } from 'react-router-dom';
// import * as request from '../../utils/request';
import RegisterSuccessful from './RegisterSuccessful';
import { getAccounts,addNewAccounts } from './RegisterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountsRegisterSelector } from '../../redux/selectors';

function Login(): JSX.Element {
  const schema = yup
    .object({
      firstName: yup.string().required('First name is required!'),
      lastName: yup.string().required('Last name is required!'),
      email: yup.string().required('Email is required!').email('Email is invalid!'),
      password: yup.string().required('Password is required!').min(8, 'Password must have at least 8 characters '),
      confirmPassword: yup
        .string()
        .required('Confirm password is required!')
        .min(8, 'Confirm password must have at least 8 characters ')
        .oneOf([yup.ref('password')], 'Confirm password must be the same with password'),
      term: yup.bool().oneOf([true], 'You must agree to our term'),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;
  type account = {
    username: string;
    password: string;
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const accountList = useSelector(getAccountsRegisterSelector);
  const onSubmit = (data: FormData) => {
    // request
    //   .get(config.api.accounts)
    //   .then((res) => {
    //     const isExist = res.every((account: account) => {
    //       return account.username !== data.email;
    //     });
    //     if (isExist !== false) {
    //       request
    //         .post(config.api.accounts, {
    //           username: data.email,
    //           password: data.password,
    //           firstname: data.firstName,
    //           lastname: data.lastName,
    //         })
    //         .then(() => {
    //           if (ref.current) ref.current.innerHTML = '';
    //           setIsSignUpSuccess(true);
    //         })
    //         .catch(() => {
    //           console.error("Can't add new account");
    //           setIsSignUpSuccess(false);
    //         });
    //     } else {
    //       if (ref.current) ref.current.innerHTML = 'Email is used! Please use another email';
    //       setIsSignUpSuccess(false);
    //     }
    //   })
    //   .catch(() => {
    //     console.error("Can't get accounts");
    //     setIsSignUpSuccess(false);
    //   });
    const isExist = accountList.every((account: account) => {
      return account.username !== data.email;
    });
    if (isExist !== false) {
      // request
      //   .post(config.api.accounts, {
      //     username: data.email,
      //     password: data.password,
      //     firstname: data.firstName,
      //     lastname: data.lastName,
      //   })
      //   .then(() => {
      //     if (ref.current) ref.current.innerHTML = '';
      //     setIsSignUpSuccess(true);
      //   })
      //   .catch(() => {
      //     console.error("Can't add new account");
      //     setIsSignUpSuccess(false);
      //   });
      dispatch(addNewAccounts(data))
        .then(()=>{
          if (ref.current) ref.current.innerHTML = '';
          setIsSignUpSuccess(true);
        })
        .catch(()=>{
          console.error("Can't add new account");
          setIsSignUpSuccess(false);
        })
    } else {
      if (ref.current) ref.current.innerHTML = 'Email is used! Please use another email';
      setIsSignUpSuccess(false);
    }
  };
  React.useEffect(() => {
    dispatch(getAccounts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [term, setTerm] = React.useState<boolean>(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLParagraphElement>(null);
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleTerm = () => {
    setTerm(!term);
  };
  return (
    <div className="w-full mb-[-12rem] ">
      <div className="bg-fdf9f5 w-full h-[80.9rem] flex justify-center items-center relative z-[1]">
        <div className="w-[45%] bg-white h-auto flex flex-col items-start p-[2rem] ">
          <p className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 self-center">
            Sign Up
          </p>
          {isSignUpSuccess === false ? (
            <>
              <div className="font-light text-[1.6rem] text-666565 mt-[1rem] self-center">
                Already have an account?{' '}
                <Link to={config.routes.login} className="underline cursor-pointer text-secondary">
                  Log in
                </Link>
                <p className="font-light text-[1.6rem] text-red-600 mt-[1rem] " ref={ref}>
                  {}
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[1rem]">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col grow mr-[3rem]">
                    <label htmlFor="firstname" className="font-normal text-[1.8rem] text-secondary">
                      First name
                    </label>
                    <input
                      {...register('firstName')}
                      type="text"
                      id="firstname"
                      placeholder="Enter first name..."
                      className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                      value={firstName}
                      onChange={(e) => handleFirstName(e)}
                    />
                    <p className="text-red-600">{errors.firstName?.message}</p>
                  </div>
                  <div className="flex flex-col grow">
                    <label htmlFor="lastname" className="font-normal text-[1.8rem] text-secondary">
                      Last name
                    </label>
                    <input
                      {...register('lastName')}
                      type="text"
                      id="lastname"
                      placeholder="Enter last name..."
                      className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                      value={lastName}
                      onChange={(e) => handleLastName(e)}
                    />
                    <p className="text-red-600">{errors.lastName?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="Enter email..."
                    className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                  />
                  <p className="text-red-600">{errors.email?.message}</p>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                    Password
                  </label>
                  <input
                    {...register('password')}
                    type="password"
                    id="password"
                    placeholder="Enter passwords..."
                    className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                    value={password}
                    onChange={(e) => handlePassword(e)}
                  />
                  <p className="text-red-600">{errors.password?.message}</p>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="confirmPassword" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                    Confirm password
                  </label>
                  <input
                    {...register('confirmPassword')}
                    type="password"
                    id="confirmPassword"
                    placeholder="Enter confirm password..."
                    className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                    value={confirmPassword}
                    onChange={(e) => handleConfirmPassword(e)}
                  />
                  <p className="text-red-600">{errors.confirmPassword?.message}</p>
                </div>
                <div className="flex justify-center items-center mt-[1.8rem]">
                  <input type="checkbox" name="" id="term" className="mr-2" onChange={handleTerm} checked={term} />
                  <label htmlFor="term" className="font-light text-[1.6rem] text-666565 inline cursor-default mr-2">
                    I agreed with
                  </label>
                  <span className="text-secondary underline cursor-pointer">terms and services</span>
                </div>
                <button className="btn-secondary mt-[1.8rem] mx-auto">Submit</button>
              </form>
            </>
          ) : (
            <RegisterSuccessful />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
