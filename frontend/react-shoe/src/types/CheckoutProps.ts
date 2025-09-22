import { CartModel } from "../models/CartModel";

export interface CustomerInfoProps {
  onCheckoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ShippingAddressProps {
  onCheckoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PaymentMethodProps {
  onCheckoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface OrderReviewProps {
  totalAmount: number;
}

export interface CheckoutFormProps {
  cart: CartModel | null;
}

export interface OrderSummaryProps {
  cart?: CartModel | null;
}

export interface PaymentMethodProps {
  onCheckoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}