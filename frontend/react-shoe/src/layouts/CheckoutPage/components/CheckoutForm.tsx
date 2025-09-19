import React, { useEffect, useState } from "react";
import { CustomerInfo } from "./CustomerInfo";
import { OrderReview } from "./OrderReview";
import { PaymentMethod } from "./PaymentMethod";
import { ShippingAddress } from "./ShippingAddress";
import { CheckoutRequest } from "../../../modelRequest/CheckoutRequest";
import { API_BASE_URL } from "../../../config/config";
import { CartModel } from "../../../models/CartModel";
import { CheckoutFormProps } from "../../../types/CheckoutProps";
import { CheckoutSuccess } from "./CheckoutSuccess";

export const CheckoutForm:React.FC<CheckoutFormProps> = ({cart}) => {

  const [formData, setFormData] = useState<Partial<CheckoutRequest>>({
    paymentMethod: "COD",
  });

  const [success, setSuccess] = useState(false);
  

  const token = localStorage.getItem("token");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!token) {
      alert("Bạn cần đăng nhập để đặt hàng !!");
      return;
    }

    if (!cart) {
      alert("Giỏ hàng trống!");
      return;
    }

    try {
     const checkoutRequest: CheckoutRequest = {
        ...formData,
        subtotal: cart.subPrice,
        shippingFee: cart.shippingFee,
        discount: cart.discount,
        totalAmount: cart.total,
        items: cart.cartItems.map(item => ({
          idVariant: item.idVariant,
          quantity: item.quantity,
        })),
      } as CheckoutRequest;

      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(checkoutRequest),
      });

      if(!response.ok) {
        throw new Error("Failed to create order !!");
      };

      const order = await response.json();
      alert("Đặt hàng thành công! Mã đơn hàng: " + order.id);
      setSuccess(true);

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error:any) {
      alert(error.message);      
    };
  };

  return (
    <div className="checkout-container" data-aos="fade-up">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <CustomerInfo onCheckoutChange={handleChange}/>
        <ShippingAddress onCheckoutChange={handleChange}/>
        <PaymentMethod/>
        <OrderReview totalAmount={cart ? cart.total : 0}/>
      </form>

      {success && <CheckoutSuccess />}
    </div>
  );
};
