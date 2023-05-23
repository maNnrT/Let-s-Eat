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
  name: string;
  img: string;
  numberPeople: number;
  dishes: Product[];
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
  dishes?: Product[];
  numberPeople?:number
  numberOfDish?: number;
};
export type Combo = {
  id: number | undefined;
  name: string;
  img: string;
  numberPeople: number;
  description?:string;
  price?:string
  dishes: Product[];
};
export type DishesInCombo = {
  id: number;
  numberOfDish: number;
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
