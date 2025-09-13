import { CartModel } from "../models/CartModel";
import { ShippingMethodModel } from "../models/ShippingMethodModel";

export interface CartItemsProps {
    cart: CartModel | null;
    onCartChange: () => void;
}

export interface CartSummaryProps {
    cart: CartModel|null;
    shippingMethods: ShippingMethodModel[];
    onCartChange: () => void;
}

export interface CartActionsProps {
    onCartChange: () => void;
}