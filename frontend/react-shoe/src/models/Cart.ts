import { CartItemProps } from "./CartItemProps";

export interface Cart {
  idUser: number;
  cartItems: CartItemProps[];
  subPrice: number;
  shippingFee: number;
  discount: number;
  total: number;
}