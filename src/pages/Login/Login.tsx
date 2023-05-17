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
import { Account } from '@/types/types';
import check from '@/assets/svg/check_formCheckOut.svg';
import SmallPopup from '@/components/Popup/SmallPopup/SmallPopup';
import Input from '@/components/Form/Input';

const schema = yup
  .object({
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    password: yup.string().required('Password is required!'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // clearErrors,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin: boolean = useSelector(getIsLogin);
  const accountList: Account[] = useSelector(getAccountsSelector);
  const onTouched = (dataForm: FormData) => {
    const user = accountList.find((account: Account) => {
      return account.username === dataForm.email && account.password === dataForm.password;
    });
    if (user) {
      dispatch(setIsLoginTrue());
      dispatch(setIdUser(user.id));
      openModal();
    } else {
      if (ref.current) ref.current.innerHTML = 'Email or password is wrong! Please check your email and password';
      dispatch(setIsLoginFalse());
    }
  };
  React.useEffect(() => {
    if (!isLogin) {
      dispatch(getAccounts());
    } else {
      navigate(config.routes.homepage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
    setTimeout(() => {
      navigate(config.routes.homepage);
    }, 2000);
  };
  // const [email, setEmail] = React.useState<string>('');
  // const [passwords, setPasswords] = React.useState<string>('');
  const ref = React.useRef<HTMLParagraphElement>(null);
  // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  //   clearErrors('email');
  // };
  // const handlePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPasswords(e.target.value);
  //   clearErrors('passwords');
  // };
  return (
    <div className="w-full mb-[-12rem] ">
      <SmallPopup refDialog={refDialog} img={check} title="Sign in success!" />
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
            <Input
              name="email"
              type="text"
              label="Email"
              placeholder="Enter email..."
              classNameWrapper="flex flex-col items-start relative"
              classNameLabel="font-normal text-[1.8rem] text-secondary"
              classNameInput="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
              classNameError="text-red-600 absolute bottom-[-2.4rem]"
              register={register}
              error={errors.email?.message}
            />

            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter password..."
              classNameWrapper="flex flex-col items-start relative"
              classNameLabel="font-normal text-[1.8rem] text-secondary mt-[1.8rem]"
              classNameInput="w-full px-[1rem] border-[2px] border-secondary outline-none h-[3rem] text-666565 "
              classNameError="text-red-600 absolute bottom-[-2.4rem]"
              register={register}
              error={errors.password?.message}
            />
            <button className="btn-secondary mt-[1.8rem] mx-auto">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
