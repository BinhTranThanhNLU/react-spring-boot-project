import React from "react";
import { ShippingAddressProps } from "../../../types/CheckoutProps";

export const ShippingAddress: React.FC<ShippingAddressProps> = ({
  onCheckoutChange,
}) => {
  return (
    <div className="checkout-section" id="shipping-address">
      <div className="section-header">
        <div className="section-number">2</div>
        <h3>Địa chỉ giao hàng</h3>
      </div>
      <div className="section-content">
        <div className="form-group">
          <label htmlFor="fullname">Họ và tên người nhận</label>
          <input
            className="form-control"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Nhập họ và tên"
            onChange={onCheckoutChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại người nhận</label>
          <input
            className="form-control"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Nhập số điện thoại"
            onChange={onCheckoutChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Địa chỉ (Số nhà, tên đường)</label>
          <input
            className="form-control"
            type="text"
            name="street"
            id="street"
            placeholder="Ví dụ: 123 Lê Lợi"
            onChange={onCheckoutChange}
            required
          />
        </div>
        <div className="row">
          <div className="col-md-4 form-group">
            <label htmlFor="ward">Phường/Xã</label>
            <input
              className="form-control"
              type="text"
              name="ward"
              id="ward"
              placeholder="Phường/Xã"
              onChange={onCheckoutChange}
              required
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="district">Quận/Huyện</label>
            <input
              className="form-control"
              type="text"
              name="district"
              id="district"
              placeholder="Quận/Huyện"
              onChange={onCheckoutChange}
              required
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="city">Tỉnh/Thành phố</label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="city"
              placeholder="Tỉnh/Thành phố"
              onChange={onCheckoutChange}
              required
            />
          </div>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="save-address"
            name="save-address"
          />
          <label className="form-check-label" htmlFor="save-address">
            Lưu địa chỉ này cho lần đặt hàng sau
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="billing-same"
            name="billing-same"
            checked
          />
          <label className="form-check-label" htmlFor="billing-same">
            Sử dụng địa chỉ này cho thanh toán
          </label>
        </div>
      </div>
    </div>
  );
};
