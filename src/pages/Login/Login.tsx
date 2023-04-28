// import classNames from 'classnames/bind';
// import styles from './Login.module.scss';
// const cx = classNames.bind(styles);
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from '../../config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from './LoginSlice';
import { setIsLoginTrue, setIsLoginFalse } from './LoginSlice';
import { getAccountsLoginSelector } from '../../redux/selectors';
const schema = yup
  .object({
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    passwords: yup.string().required('Password is required!'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
type account = {
  username: string;
  password: string;
};
function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountList = useSelector(getAccountsLoginSelector);
  const onSubmit = (data: FormData) => {
    // request
    //   .get(config.api.accounts)
    //   .then((res) => {
    //     if (
    //       res.some((account: account) => {
    //         return account.username === data.email && account.password === data.passwords;
    //       })
    //     ) {
    //       navigate('/');
    //       setIsLogin(true);
    //     } else {
    //       setIsLogin(false);
    //       if (ref.current) ref.current.innerHTML = 'Email or password is wrong! Please check your email and password';
    //     }
    //   })
    //   .catch(() => {
    //     console.error("Can't get accounts");
    //   });
    // console.log("list account", accountList);
    if (
      accountList.some((account: account) => {
        return account.username === data.email && account.password === data.passwords;
      })
    ) {
      dispatch(setIsLoginTrue());
      navigate('/');
    } else {
      if (ref.current) ref.current.innerHTML = 'Email or password is wrong! Please check your email and password';
      dispatch(setIsLoginFalse());
    }
  };
  React.useEffect(() => {
    dispatch(getAccounts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [email, setEmail] = React.useState<string>('');
  const [passwords, setPasswords] = React.useState<string>('');
  // const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLParagraphElement>(null);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value);
  };
  return (
    <div className="w-full mb-[-12rem] ">
      <div className="bg-fdf9f5 w-full h-[80.9rem] flex justify-center items-center relative z-[1]">
        <div className="w-[45%] bg-white h-auto flex flex-col items-start p-[2rem] ">
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
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[1rem]">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-normal text-[1.8rem] text-secondary">
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
              <label htmlFor="passwords" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem] ">
                Passwords
              </label>
              <input
                {...register('passwords')}
                type="password"
                id="passwords"
                placeholder="Enter passwords..."
                className="border-[2px] border-secondary outline-none h-[3rem] text-666565 placeholder:pl-[1rem]"
                value={passwords}
                onChange={(e) => handlePasswords(e)}
              />
              <p className="text-red-600">{errors.passwords?.message}</p>
            </div>
            <button className="btn-secondary mt-[1.8rem] mx-auto">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;