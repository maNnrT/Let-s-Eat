import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required('Email is required!').email('Email not valid!'),
    passwords: yup.string().required('Password is required!'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
// interface FormInfo{
//     firstName:string,
//     lastName:string,
//     age:number,
//     email:string,
//     passwords:string,
//     confirmPasswords:string,
//     term:boolean,
// }
function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  const [email, setEmail] = React.useState<string>('');
  const [passwords, setPasswords] = React.useState<string>('');
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value);
  };
  return (
    <div className="w-full mb-[-12rem] ">
      <div className="bg-fdf9f5 w-full h-[80.9rem] flex justify-center items-center relative z-[1]">
        <div className="w-[45%] bg-white h-[40rem] flex flex-col items-start p-[2rem]">
          <p className="font-fahkwang font-normal text-[4.4rem] leading-[1] mt-[3.6rem] text-151618 ">Login</p>
          <p className="font-light text-[1.6rem] text-666565 mt-[1rem]">
            Don't have account <span className='underline cursor-pointer'>Sign Up</span> {/*Đổi thành Link*/}
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
                className="border-[2px] border-secondary outline-none h-[3rem]"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="passwords" className="font-normal text-[1.8rem] text-secondary mt-[1.8rem]">
                Mật khẩu
              </label>
              <input
                {...register('passwords')}
                type="password"
                id="passwords"
                placeholder="Enter mật khẩu..."
                className="border-[2px] border-secondary outline-none h-[3rem]"
                value={passwords}
                onChange={(e) => handlePasswords(e)}
              />
              <p className="text-red-600">{errors.passwords?.message}</p>
            </div>
            <button className="btn-secondary mt-[1.8rem]">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
