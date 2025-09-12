import { CartModel } from "../models/CartModel";

export interface CartItemsProps {
    cart: CartModel | null;
    onCartChange: () => void;
}

export interface CartSummaryProps {
    cart: CartModel|null;
}

export interface CartActionsProps {
    onCartChange: () => void;
}