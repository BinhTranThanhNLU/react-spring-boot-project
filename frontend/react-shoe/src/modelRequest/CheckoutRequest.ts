export interface CheckoutItemDTO {
  idVariant: number;
  quantity: number;
  price: number;
}

export interface CheckoutRequest {
  // customer info
  nameCustomer: string;
  emailCustomer: string;
  phoneCustomer: string;

  // address
  idAddress?: number;
  fullName: string; // ten nguoi nhan
  phone: string; //so dien thoai nguoi nhan
  street: string;
  ward: string;
  district: string;
  city: string;

  // payment
  paymentMethod: "COD" | "BANK_TRANSFER" | "MOMO" | "ZALOPAY" | "VNPAY";

  shippingMethodId?: number;

  // order
  subtotal: number;
  shippingFee: number;
  discount: number;
  totalAmount: number;
  items: CheckoutItemDTO[];
}