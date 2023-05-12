import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from '@/config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '@/redux/features/account/AccountsSlice';
import { setIsLoginTrue, setIsLoginFalse, setIdUser } from '@/redux/features/checkLogin/CheckLoginSlice';
import { getAccountsSelector, getIsLogin } from '@/redux/selectors';
import { useGetAccountsQuery } from '@/redux/features/api/apiSlice';
import { Account } from '@/types/types';
import check from '@/assets/svg/check_formCheckOut.svg';

const schema = yup
  .object({
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    passwords: yup.string().required('Password is required!'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function Login(): JSX.Element {
  const { data: accounts, isSuccess} = useGetAccountsQuery();
  // if (isLoading) {
  //   console.log('loading');
  // } else if (isSuccess) {
  //   console.log('check:', accounts);
  //   console.log(isSuccess);
  // } else if (isError) {
  //   console.log(error.toString());
  // }
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    clearErrors,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountList: Account[] = useSelector(getAccountsSelector);
  const onTouched = (dataForm: FormData) => {
    if (isSuccess) {
      const user = accounts.find((account: Account) => {
        return account.username === dataForm.email && account.password === dataForm.passwords;
      });
      if (user) {
        dispatch(setIsLoginTrue());
        dispatch(setIdUser(user.id));
        navigate('/');
      } else {
        if (ref.current) ref.current.innerHTML = 'Email or password is wrong! Please check your email and password';
        dispatch(setIsLoginFalse());
      }
    }
  };
  React.useEffect(() => {
    dispatch(getAccounts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [email, setEmail] = React.useState<string>('');
  const [passwords, setPasswords] = React.useState<string>('');
  const ref = React.useRef<HTMLParagraphElement>(null);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearErrors('email');
  };
  const handlePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value);
    clearErrors('passwords');
  };
  return (
    <div className="w-full mb-[-12rem] ">
      <div className="bg-fdf9f5 w-full h-[80.9rem] flex justify-center items-center relative z-[1] shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
        <div className="w-[45%] bg-white h-fit flex flex-col items-start p-[2rem] ">
          <p className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 self-center">
            Login
          </p>
          <div className="font-light text-[1.6rem] text-666565 mt-[1rem] self-center">
            Don't have an account?{' '}
            <Link to={config.routes.register} className="underline cursor-pointer text-secondary">
              Sign Up
            </Link>{' '}
          </div>
          <p className="font-light text-[1.6rem] text-red-600 mt-[1rem] " ref={ref}>
            {}
          </p>
          <form onSubmit={handleSubmit(onTouched)} className="w-full mt-[1rem]">
            <div className="flex flex-col">
              <div className="flex flex-col items-start relative">
                <label htmlFor="email" className="font-normal text-[1.8rem] text-secondary">
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
                  <span className="absolute right-[1.2rem] top-[3.2rem]">
                    <img src={check} alt="" />
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start relative">
                <label htmlFor="passwords" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem] ">
                  Passwords
                </label>
                <input
                  {...register('passwords')}
                  type="password"
                  id="passwords"
                  placeholder="Enter passwords..."
                  className="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
                  value={passwords}
                  onChange={(e) => handlePasswords(e)}
                />
                {errors.passwords && (
                  <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.passwords?.message}</p>
                )}
                {touchedFields.passwords && !errors.passwords && (
                  <span className="absolute right-[1.2rem] top-[5rem]">
                    <img src={check} alt="" />
                  </span>
                )}
              </div>
            </div>
            <button className="btn-secondary mt-[1.8rem] mx-auto">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
