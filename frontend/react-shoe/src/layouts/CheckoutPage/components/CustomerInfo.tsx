import React from "react";
import { CustomerInfoProps } from "../../../types/CheckoutProps";

export const CustomerInfo: React.FC<CustomerInfoProps> = ({
  onCheckoutChange,
}) => {
  return (
    <div className="checkout-section" id="customer-info">
      <div className="section-header">
        <div className="section-number">1</div>
        <h3>Thông tin khách hàng</h3>
      </div>
      <div className="section-content">
        <div className="form-group">
          <label htmlFor="full-name">Họ và Tên</label>
          <input
            className="form-control"
            type="text"
            name="nameCustomer"
            id="nameCustomer"
            placeholder="Họ tên"
            onChange={onCheckoutChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="emailCustomer"
            id="emailCustomer"
            placeholder="Email"
            onChange={onCheckoutChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            className="form-control"
            type="tel"
            name="phoneCustomer"
            id="phoneCustomer"
            placeholder="Số điện thoại"
            onChange={onCheckoutChange}
            required
          />
        </div>
      </div>
    </div>
  );
};
