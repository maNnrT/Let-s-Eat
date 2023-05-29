import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import Select, { GroupBase, SingleValue, StylesConfig } from 'react-select';
import check from '@/assets/svg/check_formCheckOut.svg';
import flag from '@/assets/image/image33.png';
import heroBannerCart from '@/assets/image/HeroBanner_Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDiscountCodeSelector,
  getIdUserSelector,
  getTotalPriceSelector,
  getCartProductSelector,
  getCartComboSelector,
} from '@/redux/selectors';
import { getCartTotal, getDiscountCode, updateCart } from '@/redux/features/cart/CartSlice';
import * as yup from 'yup';
import { ComboItem, DiscountCode, ProductItem } from '@/types/types';
import Breadcrumbs from '@/components/Breadcrumb/Breadcrumb';
import Input from '@/components/Form/Input';
import formatPhoneNumber from '@/utils/formatPhoneNumber';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { setOpenCheckOutSuccess } from '@/redux/features/modalSlice/modalSlice';
const schema = yup
  .object({
    name: yup.string().required('Name is required!'),
    email: yup.string().required('Email is required!').email('Email is invalid!'),
    phone: yup.string().required('Phone number is required!'),
    city: yup.string().required('City is required!'),
    zipCode: yup.string().required('Zip code is required!'),
    address: yup.string().required('Address is required!'),
    discountCode: yup.string(),
    optionCountry: yup.string(),
    optionPayment: yup.string(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
function CheckOut(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    clearErrors,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const onTouched = (data: FormData) => {


    // cartProduct.map((item) => {
    //   if (item.quantity <= item.dishLeft)
    //     request.put(`${config.api.products}/${item.id}`, {
    //       id: item.id,
    //       type: item.type,
    //       dish: item.dish,
    //       img: item.img,
    //       name: item.name,
    //       description: item.description,
    //       ingredient: item.ingredient,
    //       detail: item.detail,
    //       detailImg: item.detailImg,
    //       price: item.price,
    //       dishLeft: item.dishLeft - item.quantity,
    //     });
    // });
    dispatch(updateCart({ id: idUser, cartProduct: [], cartCombo: [] }));
    dispatch(setOpenCheckOutSuccess(true))
  };
  const dispatch = useDispatch();
  const cartProduct: ProductItem[] = useSelector(getCartProductSelector);

  const cartCombo: ComboItem[] = useSelector(getCartComboSelector);
  const idUser: number | undefined = useSelector(getIdUserSelector);
  const discountCodeArray: DiscountCode[] = useSelector(getDiscountCodeSelector);
  const totalPrice: string = useSelector(getTotalPriceSelector);
  React.useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProduct, cartCombo]);
  React.useEffect(() => {
    dispatch(getDiscountCode());
  }, []);
  const [name, setName] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
  const [zipCode, setZipCode] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [discountCode, setDiscountCode] = React.useState<string>('');
  const [coupon, setCoupon] = React.useState<number>(0);
  const [billId, setBillId] = React.useState<string>('');
  const refDiscount = React.useRef<HTMLSpanElement | null>(null);
  const optionsCountryValue = [
    { value: 'usa', label: `United State of America` },
    { value: 'england', label: 'England' },
    { value: 'canada', label: 'Canada' },
  ];
  const optionsPaymentValue = [
    { value: 'COD', label: `By cash when receive` },
    { value: 'Transfer', label: 'Transfer via bank account' },
  ];

  // const [optionCountry, setOptionCountry] = React.useState<Option>(optionsCountryValue[0]);
  // const [optionPayment, setOptionPayment] = React.useState<Option>(optionsPaymentValue[0]);
  // const handleOptionCountry = (selectOption: SingleValue<Option>) => {
  //   if (selectOption) setOptionCountry(selectOption);
  // };
  // const handleOptionPayment = (selectOption: SingleValue<Option>) => {
  //   if (selectOption) setOptionPayment(selectOption);
  // };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    clearErrors('name');
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formatedPhoneNumber);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearErrors('email');
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    clearErrors('city');
  };
  const handleZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
    clearErrors('zipCode');
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    clearErrors('address');
  };
  const handleDiscountCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };
  const handelApplyCode = () => {
    const foundCode = discountCodeArray.find((code) => code.code === discountCode);
    if (foundCode) {
      setCoupon(foundCode.discount);

    } else {
      if (refDiscount.current !== null) refDiscount.current.innerHTML = 'This discount code is expired or not exist!';
    }
  };
  React.useEffect(() => {
    setBillId(uuidv4().substring(0, 8));
  }, []);
  const date = new Date();
  return (
    <div className="w-full tablet:mb-[-12rem] ">
      <div
        className="w-full tablet:h-[60rem] h-[32rem] bg-center bg-cover relative flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${heroBannerCart})` }}
      >
        <p className="font-fahkwang tablet:text-[6.4rem] text-[2.6rem] leading-[130%] text-center font-medium mb-[1.2rem] tablet:mb-0 first-letter:capitalize">
          food delivery
        </p>
        <Breadcrumbs />
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-fdf9f5 relative z-[1] tablet:pb-[12rem] pb-0 ">
        
        <span className="text-secondary text-[3.2rem] leading-[0px] mt-[6rem] hidden tablet:block">—</span>
        <p className="font-normal text-[1.8rem] leading-[150%] text-secondary mt-[0.8rem] uppercase hidden tablet:block">
          Check out
        </p>
        <h1 className="font-fahkwang font-normal text-[4rem] leading-[100%] mt-[2rem] text-primary text-center uppercase mb-0 hidden tablet:block">
          fINAL STEP!
        </h1>
        <p className="font-light text-[1.8rem] text-666565 mt-[2rem] text-center max-w-[59.4rem] hidden tablet:block">
          Thanks for your purchase. We have feeling this is the beginning of beautiful friendship! So that we can get to
          know each other a little better, we are offering you $10 off an order of $50 or more.
        </p>
        <div className="container h-fit tablet:mt-[6rem] my-[2.4rem]">
          <form onSubmit={handleSubmit(onTouched)} className="mx-auto h-fit">
            <div className="tablet:w-[82.3%] h-fit grid tablet:grid-cols-[58.7%_auto] grid-cols-1 gap-x-[3.2rem] mx-auto">
              <div className="h-fit order-2 tablet:order-1">
                <div className="tablet:pt-[4.4rem] pt-[2.4rem] tablet:px-[4rem]  tablet:pb-[4rem] flex flex-col items-start tablet:bg-white bg-fdf9f5 tablet:shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
                  <Input
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Enter name..."
                    classNameWrapper="relative w-full"
                    classNameLabel="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                    classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                    classNameError="text-red-600 absolute bottom-[-2.4rem]"
                    classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                    register={register}
                    touchedFields={touchedFields.name}
                    error={errors.name?.message}
                  />
                  <Input
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Enter email..."
                    classNameWrapper="relative w-full"
                    classNameLabel="font-normal block mb-[1.2rem] mt-[2.8rem] text-[1.6rem] leading-[100%] text-primary"
                    classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                    classNameError="text-red-600 absolute bottom-[-2.4rem]"
                    classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                    register={register}
                    touchedFields={touchedFields.email}
                    error={errors.email?.message}
                  />
                  <div className="grid grid-cols-2 gap-x-[2rem] w-full mt-[2.8rem]">
                    <Input
                      name="city"
                      type="text"
                      label="City"
                      placeholder="Enter city..."
                      classNameWrapper="relative w-full"
                      classNameLabel="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                      classNameError="text-red-600 absolute bottom-[-2.4rem]"
                      classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                      register={register}
                      touchedFields={touchedFields.city}
                      error={errors.city?.message}
                    />
                    <Input
                      name="zipCode"
                      type="text"
                      label="Zip code"
                      placeholder="Enter zip code..."
                      classNameWrapper="relative w-full"
                      classNameLabel="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                      classNameError="text-red-600 absolute bottom-[-2.4rem]"
                      classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                      register={register}
                      touchedFields={touchedFields.zipCode}
                      error={errors.zipCode?.message}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-[2rem] w-full mt-[2.8rem]">
                    <Input
                      name="address"
                      type="text"
                      label="Address"
                      placeholder="Enter address..."
                      classNameWrapper="relative w-full"
                      classNameLabel="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                      classNameError="text-red-600 absolute bottom-[-2.4rem]"
                      classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                      register={register}
                      touchedFields={touchedFields.address}
                      error={errors.address?.message}
                    />
                    <Input
                      name="phone"
                      type="text"
                      label="Phone number"
                      placeholder="Enter phone..."
                      classNameWrapper="relative w-full"
                      classNameLabel="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                      classNameInput="w-full h-[4.4rem] px-[1.6rem] py-[1.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                      classNameError="text-red-600 absolute bottom-[-2.4rem]"
                      classNameSuccess="absolute right-[1.2rem] top-[3.8rem]"
                      register={register}
                      touchedFields={touchedFields.phone}
                      error={errors.phone?.message}
                      value={phone}
                      onChange={handlePhone}
                    />
                  </div>
                  <label
                    htmlFor="country"
                    className="font-normal block mt-[2.8rem] mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                  >
                    Country
                  </label>
                  <select
                    {...register('optionCountry')}
                    className="w-full h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9 outline-none "
                  >
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
                  {/* <Dropdown
                    options={optionsCountryValue}
                    className="w-full h-[4.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 outline-none "
                    controlClassName="h-full border-[1px] border-d9d9d9 py-[1.4rem] pl-[1.6rem] rounded-none  "
                    placeholderClassName="h-full flex items-center"
                    menuClassName="[&>div]:py-[1.4rem] [&>div]:pl-[1.6rem] [&>div]:bg-white "
                    arrowClassName="top-[1.9rem]"
                    value={optionCountry}
                    onChange={handleOptionCountry}
                  ></Dropdown> */}
                  {/* <Select options={optionsCountryValue} onChange={handleOptionCountry} value={optionCountry} className='w-full h-[4.4rem]' styles={selectStyles} /> */}
                </div>
                <div className="tablet:mt-[4rem] tablet:pt-[4.4rem] mt-[2.8rem] tablet:px-[4rem] tablet:pb-[4rem] flex flex-col items-start tablet:bg-white bg-fdf9f5 tablet:shadow-[0px_147px_183px_rgba(0,0,0,0.07)]">
                  <label
                    htmlFor="country"
                    className="font-normal block mb-[1.2rem] text-[1.6rem] leading-[100%] text-primary"
                  >
                    Payment method
                  </label>
                  <select
                    className="w-full h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 border-[1px] border-d9d9d9  outline-none "
                    {...register('optionPayment')}
                  >
                    <option
                      value="COD"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      By cash when received
                    </option>
                    <option
                      value="Transfer"
                      className="h-[4.4rem] px-[1.6rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 "
                    >
                      Transfer via bank account
                    </option>
                  </select>
                  {/* <Dropdown
                    options={optionsPaymentValue}
                    className="w-full h-[4.4rem] font-light text-[1.6rem] leading-[1.6rem] text-444546 outline-none "
                    controlClassName="h-full border-[1px] border-d9d9d9 py-[1.4rem] pl-[1.6rem] rounded-none  "
                    placeholderClassName="h-full flex items-center"
                    menuClassName="[&>div]:py-[1.4rem] [&>div]:pl-[1.6rem] [&>div]:bg-white"
                    arrowClassName="top-[1.9rem]"
                    value={optionPayment}
                    onChange={handleOptionPayment}
                  ></Dropdown> */}
                  {/* <Select options={optionsPaymentValue} onChange={handleOptionPayment} value={optionPayment} /> */}
                </div>
              </div>
              <div className="h-fit order-1 tablet:order-2 tablet:bg-white bg-fdf9f5 tablet:shadow-[0px_147px_183px_rgba(0,0,0,0.07)] tablet:pt-[3.2rem] tablet:px-[4rem] tablet:pb-[4rem] flex flex-col items-center">
                <div className="w-full flex flex-col items-center pb-[2.4rem] border-b-[1px] border-dashed border-b-d9d9d9">
                  <p className="font-fahkwang font-normal text-[1.8rem] leading-[100%] text-primary uppercase">
                    ORDER SUMMARY - #{billId}
                  </p>
                  <div className="h-[1.1rem] w-[6rem] border-b-[1px] border-b-secondary"></div>

                  <div className="flex justify-between mt-[2.9rem] w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Date</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">{date.toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between mt-[1.2rem] w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Time</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666 uppercase">
                      {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                <div className="w-full pt-[2.4rem] flex flex-col items-center pb-[2.4rem] border-b-[1px] border-dashed border-b-d9d9d9">
                  <div className="flex justify-between w-full">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Product</p>
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666 ">Quantity</p>
                  </div>
                  <div className="w-full mt-[2.2rem]">
                    {cartProduct.map((item) => (
                      <div
                        className="flex justify-between w-full mb-[1.2rem] last-of-type:mb-0"
                        key={cartProduct.indexOf(item)}
                      >
                        <div className="flex ">
                          <LazyLoadImage
                            src={item.img}
                            alt=""
                            className="w-[5rem] h-[5rem] mr-[1.2rem] tablet:hidden"
                          />
                          <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.name}</p>
                        </div>
                        <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.quantity}</p>
                      </div>
                    ))}
                    {cartCombo.map((item) => (
                      <div
                        className="flex justify-between w-full mb-[1.2rem] last-of-type:mb-0"
                        key={cartCombo.indexOf(item)}
                      >
                        <div className="flex ">
                          <LazyLoadImage
                            src={item.img}
                            alt=""
                            className="w-[5rem] h-[5rem] mr-[1.2rem] tablet:hidden"
                          />
                          <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.name}</p>
                        </div>
                        <p className="font-normal text-[1.6rem] leading-[100%] text-primary">{item.quantity}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full mt-[3.7rem] relative">
                    <p className="font-normal text-[1.6rem] leading-[100%] text-secondary text-center absolute tablet:bg-white bg-fdf9f5 left-[0.6rem] w-[10.5rem] top-[-1rem]">
                      Discount code
                    </p>
                    <div className="w-full h-[4rem] p-[1.2rem] border-[1.5px] border-[#ADADAE] flex justify-between ">
                      <input
                        type="text"
                        className="h-full font-normal text-[1.6rem] leading-[100%] text-primary outline-none flex-1 bg-fdf9f5 tablet:bg-transparent"
                        value={discountCode}
                        onChange={handleDiscountCode}
                      />
                      <p
                        className="font-normal text-[1.6rem] leading-[100%] text-secondary uppercase cursor-pointer ml-[0.5rem]"
                        onClick={handelApplyCode}
                      >
                        apply
                      </p>
                      <span ref={refDiscount} className="text-red-600 absolute bottom-[-2.4rem] left-0"></span>
                    </div>
                  </div>
                  <div className="mt-[2.5rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Subtotal</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">{totalPrice} $</p>
                  </div>
                  <div className="mt-[1.4rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Coupon</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">{coupon.toFixed(2)} $</p>
                  </div>
                  <div className="mt-[1.4rem] w-full flex justify-between">
                    <p className="font-light text-[1.6rem] leading-[100%] text-726666">Shipping</p>
                    <p className="font-normal text-[1.8rem] leading-[100%] text-primary">0 $</p>
                  </div>
                </div>
                <div className="mt-[2.4rem] w-full  justify-between hidden tablet:flex">
                  <p className="font-medium text-[2.4rem] leading-[100%] text-primary">Total</p>
                  <p className="font-medium text-[2.4rem] leading-[100%] text-primary">
                    $ {Number(totalPrice) + coupon > 0 ? (Number(totalPrice) + coupon).toFixed(2) : 0.0}
                  </p>
                </div>
                <div className="w-full px-[1.2rem] mt-[4rem] hidden tablet:block">
                  <button className="btn-secondary w-full uppercase text-f6e8d6">confirm order</button>
                </div>
                <div className="tablet:hidden fixed bottom-0 bg-fdf9f5 right-0 left-0  h-[5rem] shadow-[0_2px_12px_rgba(0,0,0,0.12)] flex items-center justify-end z-[2]">
                  <p className="font-semibold tablet:text-[2.4rem] text-[1.6rem] text-primary uppercase mr-[1rem]">
                    TOTAL: {totalPrice} $
                  </p>
                  <button className="btn-secondary w-[13rem] h-[3rem] uppercase text-f6e8d6 tablet:text-[1.6rem] text-[1.4rem]">
                    confirm order
                  </button>
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
