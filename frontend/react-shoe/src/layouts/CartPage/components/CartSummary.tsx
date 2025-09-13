import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartSummaryProps } from "../../../types/CartProps";
import { API_BASE_URL } from "../../../config/config";

export const CartSummary: React.FC<CartSummaryProps> = ({
  cart,
  shippingMethods,
  onCartChange
}) => {
  
  const [selectedShipping, setSelectedShipping] = useState<number | null>(
    cart?.shippingMethodId || null
  );

  const token = localStorage.getItem("token");

  const handleShippingChange = async (shippingId: number) => {
    setSelectedShipping(shippingId);

    try {
      await fetch(`${API_BASE_URL}/cart/shipping/${shippingId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Sau khi update shipping method, gọi lại API cart
      onCartChange()
    } catch (error) {
      console.error("Lỗi khi cập nhật shipping method", error);
    }
  };



  if (!cart) return null;

  return (
    <div className="cart-summary">
      <h4 className="summary-title">Tóm tắt đơn hàng</h4>

      <div className="summary-item">
        <span className="summary-label">Tổng phụ</span>
        <span className="summary-value">
          {cart.subPrice.toLocaleString("vi-VN")}đ
        </span>
      </div>

      <div className="summary-item shipping-item">
        <span className="summary-label">Vận chuyển</span>
        <div className="shipping-options">
          {shippingMethods.map((shipping) => (
            <div className="form-check text-end" key={shipping.id}>
              <input
                className="form-check-input"
                type="radio"
                name="shipping"
                id={`shipping-${shipping.id}`}
                checked={selectedShipping === shipping.id}
                onChange={() => handleShippingChange(shipping.id)}
              />
              <label
                className="form-check-label"
                htmlFor={`shipping-${shipping.id}`}
              >
                {shipping.name} -{" "}
                {shipping.minOrderAmount &&
                cart &&
                cart.subPrice >= shipping.minOrderAmount
                  ? "Miễn phí"
                  : `${shipping.cost.toLocaleString("vi-VN")}đ`}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-item discount">
        <span className="summary-label">Giảm giá</span>
        <span className="summary-value">
          -{cart.discount.toLocaleString("vi-VN")}đ
        </span>
      </div>

      <div className="summary-total">
        <span className="summary-label">Tổng</span>
        <span className="summary-value">
          {cart.total.toLocaleString("vi-VN")}đ
        </span>
      </div>

      <div className="checkout-button">
        <a href="#" className="btn btn-accent w-100">
          Thanh toán <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      <div className="continue-shopping">
        <Link to="/home" className="btn btn-link w-100">
          <i className="bi bi-arrow-left"></i> Tiếp tục mua sắm
        </Link>
      </div>

      <div className="payment-methods">
        <p className="payment-title">Phương thức thanh toán</p>
        <div className="payment-icons">
          <i className="bi bi-credit-card"></i>
          <i className="bi bi-paypal"></i>
          <i className="bi bi-wallet2"></i>
          <i className="bi bi-bank"></i>
        </div>
      </div>
    </div>
  );
};
