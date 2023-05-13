export type Item = {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
};
export type Product = {
  id: number | undefined;
  type: string;
  dish: string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
  quantity: number | undefined;
};
export type Account = {
  id: number | undefined;
  username: string;
  password: string;
};
export type UserCart = {
  idUser: number;
  cart: Item[];
};
export type DiscountCode = {
  id: number | undefined;
  code: string;
  discount: number;
};
export type Combo = {
  id: number | undefined;
  name: string;
  img: string;
  numberPeople: number;
  dishes: Product[];
};
