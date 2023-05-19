export type ProductItem = {
  id: number;
  type: string;
  dish: string;
  img: string;
  name: string;
  description: string;
  ingredient: string;
  detail: string;
  detailImg: string;
  price: string;
  dishLeft: number;
  quantity: number;
};
export type ComboItem = {
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
  dishLeft: number;
  numberOfDish?:number
};
export type DishesInCombo = {
  id: number;
  numberOfDish: number;
};
export type Combo = {
  id: number | undefined;
  name: string;
  img: string;
  numberPeople: number;
  dishes: Product[];
};
export type Account = {
  id: number | undefined;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};
export type UserCart = {
  id: number | undefined;
  cartProduct: ProductItem[];
  cartCombo: ComboItem[];
};
export type DiscountCode = {
  id: number | undefined;
  code: string;
  discount: number;
};
