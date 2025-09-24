import { OrderItemModel } from "./OrderItemModel";

export interface OrderModel {
    id: number;
    totalAmount: number;
    status: string;
    idUser: number;
    idAddress: number;
    idPayment?: number;
    createdAt: string;
    updatedAt: string;
    items: OrderItemModel[];
}