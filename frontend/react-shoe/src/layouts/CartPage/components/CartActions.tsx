export const CartActions = () => {
  return (
    <div className="cart-actions">
      <div className="row">
        <div className="col-lg-6 mb-3 mb-lg-0">
          <div className="coupon-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon code"
              />
              <button className="btn btn-outline-accent" type="button">
                Áp dụng mã giảm giá
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-md-end">
          <button className="btn btn-outline-remove">
            <i className="bi bi-trash"></i> Xóa cart
          </button>
        </div>
      </div>
    </div>
  );
};
