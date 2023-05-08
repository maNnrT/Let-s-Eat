import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import check from '../../assets/svg/check_formCheckOut.svg';
import flag from '../../assets/image/image33.png';
import heroBannerCart from '../../assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPriceSelector, getUserCartSelector } from '../../redux/selectors';
import { getCartTotal } from '../../redux/feature/CartSlice';
import BigPopup from '../../components/Popup/BigPopup';
import config from '../../config';
type item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};
const schema = yup
  .object({
    name: yup.string(),
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    phone: yup.string().required('Phone number is required!'),
    city: yup.string(),
    zipCode: yup.string().required('Zip code is required!'),
    address: yup.string(),
    discountCode: yup.string(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
function CheckOut(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const ref = React.useRef<HTMLSpanElement>(null);
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const onSubmit = (data: FormData) => {
    setIsValid(true);
    console.log(data);
    openModal();
  };
  const dispatch = useDispatch();
  const cart: item[] = useSelector(getUserCartSelector);
  const totalPrice: number = useSelector(getTotalPriceSelector);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  const [name, setName] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [zipCode, setZipCode] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [discountCode, setDiscountCode] = React.useState<string>('');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleDiscountCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };
  const handelApplyCode = ()=>{
    console.log(discountCode);
  }
  const refDialog = React.useRef<HTMLDialogElement>(null);
  const openModal = () => {
    refDialog.current?.showModal();
  };
  return (
    <div className="w-full mb-[-12rem] relative">
      <div
        className="w-full h-[60rem] bg-center bg-cover relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang text-[6.4rem] leading-[8.3rem] text-center font-medium">Food delivery</p>
        <p className="font-normal text-[2.2rem] leading-[3.7rem] text-center text-cbcac9">Home/Cart/Check out</p>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] pb-[12rem] ">
        <BigPopup title='for your ordering' subtitle='thank you' 
        description='Thanks for your purchase. We have feeling this is the beginning of beautiful friendship! Don’t forget follow us on social media and stay
         up to date with the lastest information' 
         btnTitle='back to homepage' 
         to={config.routes.homepage} 
         refDialog={refDialog}/>
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem]">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase">Check out</p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0">
          fINAL STEP!
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem]">
          Thanks for your purchase. We have feeling this is the beginning of beautiful friendship! So that we can get to
          know each other a little better, we are offering you $10 off an order of $50 or more.
        </p>
        <div className="container h-fit mt-[6rem]">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto h-fit">
            <div className="w-[82.3%] h-fit grid grid-cols-[58.7%_auto] gap-x-[3.2rem] mx-auto">
              <div className="h-fit">
                <div className="pt-[4.4rem] px-[4rem] pb-[4rem] flex flex-col items-start bg-white shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
                  <div className="relative w-full">
                    <label
                      htmlFor="name"
                      className="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                    >
                      Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
                      onChange={handleName}
                      value={name}
                      placeholder="Enter name..."
                      id="name"
                      name="name"
                    />
                    {errors.name !== undefined ? (
                      <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.name?.message}</p>
                    ) : null}
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
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
                      <span className="absolute right-[1.2rem] top-[6.75rem]">
                        {isValid ? <img src={check} alt="" /> : null}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-x-[2rem] w-full mt-[2.8rem]">
                    <div className="relative w-full">
                      <label
                        htmlFor="city"
                        className="font-normal block  mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      >
                        City
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
                        onChange={handleCity}
                        value={city}
                        placeholder="Enter city..."
                        id="city"
                        name="city"
                      />
                      {errors.city !== undefined ? (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.city?.message}</p>
                      ) : null}
                    </div>
                    <div className="relative w-full">
                      <label
                        htmlFor="zipCode"
                        className="font-normal block  mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      >
                        Zip code
                      </label>
                      <input
                        {...register('zipCode')}
                        type="text"
                        className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
                        onChange={handleZipCode}
                        value={zipCode}
                        placeholder="Enter Zip code..."
                        id="zipCode"
                        name="zipCode"
                      />
                      {errors.zipCode !== undefined ? (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.zipCode?.message}</p>
                      ) : (
                        <span className="absolute right-[1.2rem] top-[4rem]" ref={ref}>
                          {isValid ? <img src={check} alt="" /> : null}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-[2rem] w-full mt-[2.8rem]">
                    <div className="relative w-full">
                      <label
                        htmlFor="address"
                        className="font-normal block  mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      >
                        Address
                      </label>
                      <input
                        {...register('address')}
                        type="text"
                        className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
                        onChange={handleAddress}
                        value={address}
                        placeholder="Enter address..."
                        id="address"
                        name="address"
                      />
                      {errors.address !== undefined ? (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.address?.message}</p>
                      ) : null}
                    </div>
                    <div className="relative w-full">
                      <label
                        htmlFor="phone"
                        className="font-normal block  mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      >
                        Phone number
                      </label>
                      <input
                        {...register('phone')}
                        type="text"
                        className="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none"
                        onChange={handlePhone}
                        value={phone}
                        placeholder="Enter Zip code..."
                        id="phone"
                        name="phone"
                      />
                      {errors.phone !== undefined ? (
                        <p className="text-red-600 absolute bottom-[-2.4rem]">{errors.phone?.message}</p>
                      ) : (
                        <span className="absolute right-[1.2rem] top-[4rem]" ref={ref}>
                          {isValid ? <img src={check} alt="" /> : null}
                        </span>
                      )}
                    </div>
                  </div>
                  <label
                    htmlFor="country"
                    className="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                  >
                    Country
                  </label>
                  <select className="w-full h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none ">
                    <option
                      value="USA"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      United States of America
                    </option>
                    <option
                      value="Canada"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      Canada
                    </option>
                    <option
                      value="England"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      England
                    </option>
                  </select>
                </div>
                <div className="mt-[4rem] pt-[4.4rem] px-[4rem] pb-[4rem] flex flex-col items-start bg-white shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
                  <label
                    htmlFor="country"
                    className="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                  >
                    Payment method
                  </label>
                  <select className="w-full h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9  outline-none ">
                    <option
                      value="COD"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      By cash when received
                    </option>
                    <option
                      value="Tranfer"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      Tranfer
                    </option>
                  </select>
                </div>
              </div>
              <div className="h-fit bg-white shadow-[0px_147px_183px_rgba(0,0,0,0.07)] pt-[3.2rem] px-[4rem] pb-[4rem] flex flex-col items-center">
                <div className="w-full flex flex-col items-center pb-[2.4rem] border-b-[1px] border-dashed border-b-d9d9d9">
                  <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-primary uppercase">
                    ORDER SUMMARY
                  </p>
                  <div className="h-[1.1rem] w-[6rem] border-b-[1px] border-b-secondary"></div>

                  <div className="flex justify-between mt-[2.9rem] w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Date</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">04/01/2022</p>
                  </div>
                  <div className="flex justify-between mt-[1.2rem] w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Time</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666 uppercase">2:55 PM</p>
                  </div>
                </div>
                <div className="w-full pt-[2.4rem] flex flex-col items-center pb-[2.4rem] border-b-[1px] border-dashed border-b-d9d9d9">
                  <div className="flex justify-between w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Product</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666 ">Quantity</p>
                  </div>
                  <div className="w-full mt-[2.2rem]">
                    {cart.map((item) => (
                      <div className="flex justify-between w-full mb-[1.2rem] last-of-type:mb-0" key={cart.indexOf(item)}>
                        <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.name}</p>
                        <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.quantity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full mt-[3.7rem] relative">
                    <p className="font-normal text-[1.6rem] leading-[100%] text-secondary text-center absolute bg-white left-[0.6rem] w-[10.5rem] top-[-1rem]">
                      Discount code
                    </p>
                    <div className="w-full h-[4rem] p-[1.2rem] border-[1.5px] border-[#ADADAE] flex justify-between">
                      <input
                        type="text"
                        className="h-full font-normal text-[1.6rem] leading-[100%] text-primary outline-none flex-1"
                        value={discountCode}
                        onChange={handleDiscountCode}
                      />
                      <p className="font-normal text-[1.6rem] leading-[100%] text-secondary uppercase cursor-pointer ml-[0.5rem]"
                      onClick={handelApplyCode}>
                        apply
                      </p>
                    </div>
                  </div>
                  <div className="mt-[2.5rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Subtotal</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">{totalPrice} $</p>
                  </div>
                  <div className="mt-[1.4rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Coupon</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">{totalPrice} $</p>
                  </div>
                  <div className="mt-[1.4rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Shipping</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">{totalPrice} $</p>
                  </div>
                </div>
                <div className="mt-[2.4rem] w-full flex justify-between">
                  <p className="font-medium text-[2.4rem] leading-[100%] text-primary">Total</p>
                  <p className="font-medium text-[2.4rem] leading-[100%] text-primary">$ {totalPrice}</p>
                </div>
                <div className="w-full px-[1.2rem] mt-[4rem]">
                  <button className="btn-secondary w-full uppercase text-f6e8d6">confirm order</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
