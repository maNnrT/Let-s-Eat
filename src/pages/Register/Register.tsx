import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from '@/config';
import { Link, useNavigate } from 'react-router-dom';
import RegisterSuccessful from './RegisterSuccessful';
import { getAccounts, addNewAccounts } from '@/redux/features/account/AccountsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountsSelector } from '@/redux/selectors';
import { Account } from '@/types/types';
import { useGetAccountsQuery } from '@/redux/features/api/apiSlice';
import check from '@/assets/svg/check_formCheckOut.svg';
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
    term: yup.boolean().oneOf([true], 'You must agree to our term'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
function Login(): JSX.Element {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    clearErrors,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const accountList: Account[] = useSelector(getAccountsSelector);
  const onTouched = (data: FormData) => {
    const isExist = accountList.every((account: Account) => {
      return account.username !== data.email;
    });
    console.log('check:', errors.term);

    if (isExist !== false) {
      dispatch(addNewAccounts(data))
        .then(() => {
          if (ref.current) ref.current.innerHTML = '';
          setIsSignUpSuccess(true);
        })
        .catch(() => {
          console.error("Can't add new account");
          setIsSignUpSuccess(false);
        });
      navigate(config.routes.login)
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
    clearErrors('firstName');
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    clearErrors('lastName');
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearErrors('email');
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    clearErrors('password');
  };
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    clearErrors('confirmPassword');
  };
  const handleTerm = () => {
    setTerm(!term);
    clearErrors('term');
  };
  return (
    <div className="w-full mb-[-12rem] ">
      <div className="bg-fdf9f5 w-full h-[80.9rem] flex justify-center items-center relative z-[1] shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
        <div className="w-[45%] bg-white h-auto flex flex-col items-start p-[2rem] ">
          <p className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 self-center">
            Sign Up
          </p>
          {isSignUpSuccess === false ? (
            <>
              <div className="font-light text-[1.6rem] text-666565 mt-[1rem] self-center flex flex-col items-center">
                <p>
                  Already have an account?
                  <Link to={config.routes.login} className="underline cursor-pointer text-secondary">
                    Log in
                  </Link>
                </p>

                <p className="font-light text-[1.6rem] text-red-600 mt-[1rem] " ref={ref}>
                  {}
                </p>
              </div>
              <form onSubmit={handleSubmit(onTouched)} className="w-full mt-[1rem]">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col grow mr-[3rem]">
                    <div className="flex flex-col items-start relative">
                      <label htmlFor="firstname" className="font-normal text-[1.8rem] text-secondary">
                        First name
                      </label>
                      <input
                        {...register('firstName')}
                        type="text"
                        id="firstname"
                        placeholder="Enter first name..."
                        className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
                        value={firstName}
                        onChange={(e) => handleFirstName(e)}
                      />
                      {errors.firstName && (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.firstName?.message}</p>
                      )}
                      {touchedFields.firstName && !errors.firstName && (
                        <span className="absolute right-[1.2rem] top-[3.2rem]">
                          <img src={check} alt="" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col grow">
                    <div className="flex flex-col items-start relative">
                      <label htmlFor="lastname" className="font-normal text-[1.8rem] text-secondary">
                        Last name
                      </label>
                      <input
                        {...register('lastName')}
                        type="text"
                        id="lastname"
                        placeholder="Enter last name..."
                        className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
                        value={lastName}
                        onChange={(e) => handleLastName(e)}
                      />
                      {errors.lastName && (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.lastName?.message}</p>
                      )}
                      {touchedFields.lastName && !errors.lastName && (
                        <span className="absolute right-[1.2rem] top-[3.2rem]">
                          <img src={check} alt="" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col items-start relative">
                    <label htmlFor="email" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="Enter email..."
                      className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
                      value={email}
                      onChange={(e) => handleEmail(e)}
                    />
                    {errors.email && <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.email?.message}</p>}
                    {touchedFields.email && !errors.email && (
                      <span className="absolute right-[1.2rem] top-[5rem]">
                        <img src={check} alt="" />
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col items-start relative">
                    <label htmlFor="password" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                      Password
                    </label>
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      placeholder="Enter passwords..."
                      className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565"
                      value={password}
                      onChange={(e) => handlePassword(e)}
                    />
                    {errors.password && (
                      <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.password?.message}</p>
                    )}
                    {touchedFields.password && !errors.password && (
                      <span className="absolute right-[1.2rem] top-[5rem]">
                        <img src={check} alt="" />
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col items-start relative">
                    <label htmlFor="confirmPassword" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                      Confirm password
                    </label>
                    <input
                      {...register('confirmPassword')}
                      type="password"
                      id="confirmPassword"
                      placeholder="Enter confirm password..."
                      className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
                      value={confirmPassword}
                      onChange={(e) => handleConfirmPassword(e)}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.confirmPassword?.message}</p>
                    )}
                    {touchedFields.confirmPassword && !errors.confirmPassword && (
                      <span className="absolute right-[1.2rem] top-[5rem]">
                        <img src={check} alt="" />
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center mt-[1.8rem] relative">
                  <input type="checkbox" id="term" className="mr-2" {...register('term')} />
                  <label htmlFor="term" className="font-light text-[1.6rem] text-666565 inline cursor-default mr-2">
                    I agreed with
                  </label>
                  <span className="text-secondary underline cursor-pointer">terms and services</span>
                  {errors.term && <p className="text-red-600 absolute bottom-[-2rem]">{errors.term?.message}</p>}
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
