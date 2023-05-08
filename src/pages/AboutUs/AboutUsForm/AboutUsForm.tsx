// import classNames from 'classnames/bind';
// import styles from './Register.module.scss';
// const cx = classNames.bind(styles);
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import check from '@/assets/svg/check_formCheckOut.svg';
// import * as request from '@/utils/request';
const schema = yup
  .object({
    name: yup.string().required('Name is required!'),
    phone: yup.string().required('Phone number is required!'),
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    message: yup.string(),
  })
  .required();
interface Props {
  openModal: () => void;
}
type FormData = yup.InferType<typeof schema>;
function AboutUsForm({ openModal }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [name, setName] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const onSubmit = (data: FormData) => {
    setIsValid(true);
    openModal();
    console.log(data);
  };
  return (
    <div className="w-full mt-[4rem] flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-[3.2rem]">
          <div className="flex flex-col items-start relative">
            <label htmlFor="name" className="block mb-[1.2rem] font-normal text-[1.6rem] leading-[0%] text-primary">
              Your name
            </label>
            <input
              {...register('name')}
              type="text"
              className="block w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
              onChange={handleName}
              value={name}
              placeholder="Enter your name..."
              id="name"
              name="name"
            />
            {errors.name !== undefined ? (
              <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.name?.message}</p>
            ) : (
              <span className="absolute right-[1.2rem] top-[2.4rem]">
                {isValid ? <img src={check} alt="" /> : null}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start relative">
            <label htmlFor="phone" className="font-normal block mb-[1.2rem] text-[1.6rem] leading-[0%] text-primary">
              Phone number
            </label>
            <input
              {...register('phone')}
              type="text"
              className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
              onChange={handlePhone}
              value={phone}
              placeholder="Enter phone number..."
              id="phone"
              name="phone"
            />
            {errors.phone !== undefined ? (
              <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.phone?.message}</p>
            ) : (
              <span className="absolute right-[1.2rem] top-[2.4rem]">
                {isValid ? <img src={check} alt="" /> : null}
              </span>
            )}
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[0%] text-primary"
          >
            Email
          </label>
          <input
            {...register('email')}
            type="text"
            className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
            onChange={handleEmail}
            value={email}
            placeholder="Enter email..."
            id="email"
            name="email"
          />
          {errors.email !== undefined ? (
            <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.email?.message}</p>
          ) : (
            <span className="absolute right-[1.2rem] top-[2.4rem]">{isValid ? <img src={check} alt="" /> : null}</span>
          )}
        </div>
        <label
          htmlFor="message"
          className="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[0%] text-primary"
        >
          Message
        </label>
        <textarea
          {...register('message')}
          className="w-full h-[4.8rem] max-h-[10rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
          onChange={handleMessage}
          value={message}
          placeholder="Write your request..."
          id="message"
          name="message"
        />
        <button className="btn-secondary mt-[4rem] uppercase">SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default AboutUsForm;
