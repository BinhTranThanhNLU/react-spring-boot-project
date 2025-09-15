export const CustomerInfo = () => {
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
            name="full"
            id="full"
            placeholder="Họ và Tên"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email"
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
            placeholder="Số điện thoại"
            required
          />
        </div>
      </div>
    </div>
  );
};
