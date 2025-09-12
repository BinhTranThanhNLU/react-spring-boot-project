import { CartItemModel } from "./CartItemModel";

export interface CartModel {
  idUser: number;
  cartItems: CartItemModel[];
  subPrice: number;
  shippingFee: number;
  discount: number;
  total: number;
}