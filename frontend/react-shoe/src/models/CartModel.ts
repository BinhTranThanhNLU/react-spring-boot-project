import { CartItemModel } from "./CartItemModel";

export interface CartModel {
  idUser: number;
  cartItems: CartItemModel[];
  subPrice: number;
  shippingMethodId: number;
  shippingFee: number;
  discount: number;
  total: number;
}