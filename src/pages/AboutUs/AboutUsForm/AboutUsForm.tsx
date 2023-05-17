import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/Form/Input';
import InputTextarea from '@/components/Form/InputTextarea';
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
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const onTouched = (data: FormData) => {
    openModal();
    console.log(data);
  };
  return (
    <div className="w-full mt-[4rem] flex flex-col">
      <form onSubmit={handleSubmit(onTouched)}>
        <div className="grid grid-cols-2 gap-x-[3.2rem]">
          <Input
            name="name"
            type="text"
            label="Your name"
            placeholder="Enter your name..."
            classNameWrapper="flex flex-col items-start relative"
            classNameLabel="block mb-[1.2rem] font-normal text-[1.6rem] leading-[0%] text-primary"
            classNameInput="block w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
            classNameError="text-red-600 absolute bottom-0 translate-y-[2.4rem] transition-all duration-500"
            classNameSuccess="absolute right-[1.2rem] top-[2.4rem]"
            register={register}
            error={errors.name?.message}
            touchedFields={touchedFields.name}
          />
          <Input
            name="phone"
            type="text"
            label="Phone number"
            placeholder="Enter phone number..."
            classNameWrapper="flex flex-col items-start relative"
            classNameLabel="block mb-[1.2rem] font-normal text-[1.6rem] leading-[0%] text-primary"
            classNameInput="block w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
            classNameError="text-red-600 absolute bottom-0 translate-y-[2.4rem] transition-all duration-500"
            classNameSuccess="absolute right-[1.2rem] top-[2.4rem]"
            register={register}
            error={errors.phone?.message}
            touchedFields={touchedFields.phone}
          />
        </div>
        <Input
          name="email"
          type="text"
          label="Email"
          placeholder="Enter email..."
          classNameWrapper="relative"
          classNameLabel="block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[0%] text-primary"
          classNameInput="block w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
          classNameError="text-red-600 absolute bottom-[-2.4rem]"
          classNameSuccess="absolute right-[1.2rem] top-[2.4rem]"
          register={register}
          error={errors.email?.message}
          touchedFields={touchedFields.email}
        />
        <InputTextarea
          name="message"
          placeholder="Write your request..."
          label="Message"
          classNameWrapper="relative"
          classNameLabel="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[0%] text-primary"
          classNameInput="w-full h-[4.8rem] max-h-[10rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
        />
        <button className="btn-secondary mt-[4rem] uppercase">SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default AboutUsForm;
