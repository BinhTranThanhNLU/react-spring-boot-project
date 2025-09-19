import { OrderReviewProps } from "../../../types/CheckoutProps";

export const OrderReview: React.FC<OrderReviewProps> = ({ totalAmount }) => {
  return (
    <div className="checkout-section" id="order-review">
      <div className="section-header">
        <div className="section-number">4</div>
        <h3>Đánh giá &amp; Đặt hàng</h3>
      </div>
      <div className="section-content">
        <div className="form-check terms-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            name="terms"
            required
          />
          <label className="form-check-label" htmlFor="terms">
            Tôi đồng ý với{" "}
            <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
              Điều khoản và Điều kiện
            </a>{" "}
            và{" "}
            <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">
              Chính sách Bảo mật
            </a>
          </label>
        </div>
        <div className="success-message d-none">
          Đơn hàng của bạn đã được đặt thành công! Cảm ơn bạn đã mua hàng.
        </div>
        <div className="place-order-container">
          <button type="submit" className="btn btn-primary place-order-btn">
            <span className="btn-text">Thanh toán</span>
            <span className="btn-price">
              {totalAmount.toLocaleString("vi-VN")} ₫
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
