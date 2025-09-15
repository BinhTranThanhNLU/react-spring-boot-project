export const ShippingAddress = () => {
  return (
    <div className="checkout-section" id="shipping-address">
      <div className="section-header">
        <div className="section-number">2</div>
        <h3>Địa chỉ giao hàng</h3>
      </div>
      <div className="section-content">
        <div className="form-group">
          <label htmlFor="fullname">Họ và tên</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            id="fullname"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ (Số nhà, tên đường)</label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Ví dụ: 123 Lê Lợi"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-4 form-group">
            <label htmlFor="ward">Phường/Xã</label>
            <input
              type="text"
              name="ward"
              className="form-control"
              id="ward"
              placeholder="Phường/Xã"
              required
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="district">Quận/Huyện</label>
            <input
              type="text"
              name="district"
              className="form-control"
              id="district"
              placeholder="Quận/Huyện"
              required
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="city">Tỉnh/Thành phố</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              placeholder="Tỉnh/Thành phố"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Quốc gia</label>
          <select className="form-select" id="country" name="country" required>
            <option value="VN" selected>
              Việt Nam
            </option>
            <option value="US">Hoa Kỳ</option>
            <option value="CA">Canada</option>
            <option value="UK">Vương Quốc Anh</option>
            <option value="AU">Úc</option>
            <option value="DE">Đức</option>
            <option value="FR">Pháp</option>
          </select>
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
