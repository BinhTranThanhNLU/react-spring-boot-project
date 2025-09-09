import { CartItemProps } from "./CartItemProps";

export interface Cart {
  cartItems: CartItemProps[];
  idUser: number;
}