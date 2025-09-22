import React, { useState } from "react";
import { CustomerInfo } from "./CustomerInfo";
import { OrderReview } from "./OrderReview";
import { PaymentMethod } from "./PaymentMethod";
import { ShippingAddress } from "./ShippingAddress";
import { CheckoutRequest } from "../../../modelRequest/CheckoutRequest";
import { API_BASE_URL } from "../../../config/config";
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

      //1. tao order
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

      //2. neu chon cod => success
      if(formData.paymentMethod === "COD") {
        alert("Đặt hàng thành công! Mã đơn hàng: " + order.id);
        setSuccess(true);
        window.dispatchEvent(new Event("cartUpdated"));
        return;
      }

      //3. neu chon vnpay
      if(formData.paymentMethod === "VNPAY") {
        const responseVnpay = await fetch(`${API_BASE_URL}/orders/${order.id}/vnpay`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        if(!responseVnpay.ok) {
          throw new Error("Failed to create vnpay order!!!");
        }

        const data = await responseVnpay.json();
        window.location.href = data.paymentUrl;
      }
    } catch (error:any) {
      alert(error.message);      
    };
  };

  return (
    <div className="checkout-container" data-aos="fade-up">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <CustomerInfo onCheckoutChange={handleChange}/>
        <ShippingAddress onCheckoutChange={handleChange}/>
        <PaymentMethod onCheckoutChange={handleChange}/>
        <OrderReview totalAmount={cart ? cart.total : 0}/>
      </form>

      {success && <CheckoutSuccess />}
    </div>
  );
};
