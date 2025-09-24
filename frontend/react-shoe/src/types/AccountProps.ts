import { OrderModel } from "../models/OrderModel";

export interface ProfileMenuProps {
    orders: OrderModel[] | null;
}

export interface OrderTabProps {
    orders: OrderModel[] | null;
}

export interface OrderCardProps {
    order: OrderModel;
}