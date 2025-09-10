import { API_BASE_URL } from "../../../config/config";

export const CartActions = () => {

  const token = localStorage.getItem("token");

  const handleClearCart = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/clear`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if(!response.ok) throw new Error("Failed to clear cart!!!");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

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
          <button className="btn btn-outline-remove" onClick={handleClearCart}>
            <i className="bi bi-trash"></i> Xóa cart
          </button>
        </div>
      </div>
    </div>
  );
};
