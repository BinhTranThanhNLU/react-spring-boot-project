import React from "react";
import { OrderSummaryProps } from "../../../types/CheckoutProps";

export const OrderSummary:React.FC<OrderSummaryProps> = ({cart}) => {

  if (!cart) return null;

  return (
    <div className="order-summary" data-aos="fade-left" data-aos-delay="200">
      <div className="order-summary-header">
        <h3>Tóm tắt đơn hàng</h3>
        <span className="item-count">{cart.cartItems.length}</span>
      </div>

      <div className="order-summary-content">
        <div className="order-items">
          {
            cart.cartItems.map((item) => (
               <div className="order-item">
            <div className="order-item-image">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
              />
            </div>
            <div className="order-item-details">
              <h4>{item.title}</h4>
              <p className="order-item-variant">
                Màu: {item.color} | Size: {item.size}
              </p>
              <div className="order-item-price">
                <span className="quantity">{item.quantity} ×</span>
                <span className="price">{item.price.toLocaleString("vi-VN")}</span>
              </div>
            </div>
          </div>
            ))
          }
        </div>

        <div className="promo-code">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Mã giảm giá"
              aria-label="Mã giảm giá"
            />
            <button className="btn btn-outline-primary" type="button">
              Áp dụng
            </button>
          </div>
        </div>

        <div className="order-totals">
          <div className="order-subtotal d-flex justify-content-between">
            <span>Tạm tính</span>
            <span>{cart.subPrice.toLocaleString("vi-VN")}</span>
          </div>
          <div className="order-shipping d-flex justify-content-between">
            <span>Phí vận chuyển</span>
            <span>{cart.shippingFee.toLocaleString("vi-VN")}</span>
          </div>
          <div className="order-tax d-flex justify-content-between">
            <span>Giảm</span>
            <span>{cart.discount.toLocaleString("vi-VN")}</span>
          </div>
          <div className="order-total d-flex justify-content-between">
            <span>Tổng cộng</span>
            <span>{cart.total.toLocaleString("vi-VN")}</span>
          </div>
        </div>

        <div className="secure-checkout">
          <div className="secure-checkout-header">
            <i className="bi bi-shield-lock"></i>
            <span>Thanh toán an toàn</span>
          </div>
          <div className="payment-icons">
            <i className="bi bi-credit-card-2-front"></i>
            <i className="bi bi-credit-card"></i>
            <i className="bi bi-paypal"></i>
            <i className="bi bi-apple"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
