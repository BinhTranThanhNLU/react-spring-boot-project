export const PaymentMethod = () => {
  return (
    <div className="checkout-section" id="payment-method">
      <div className="section-header">
        <div className="section-number">3</div>
        <h3>Phương thức thanh toán</h3>
      </div>
      <div className="section-content">
        <div className="payment-options">
          <div className="payment-option active">
            <input type="radio" name="payment-method" id="cod" defaultChecked />
            <label htmlFor="cod">
              <span className="payment-icon"><i className="bi bi-truck" /></span>
              <span className="payment-label">Thanh toán khi nhận hàng (COD)</span>
            </label>
          </div>

          <div className="payment-option">
            <input type="radio" name="payment-method" id="bank-transfer" />
            <label htmlFor="bank-transfer">
              <span className="payment-icon"><i className="bi bi-bank" /></span>
              <span className="payment-label">Chuyển khoản ngân hàng</span>
            </label>
          </div>

          <div className="payment-option">
            <input type="radio" name="payment-method" id="momo" />
            <label htmlFor="momo">
              <span className="payment-icon"><i className="bi bi-phone" /></span>
              <span className="payment-label">Ví MoMo</span>
            </label>
          </div>

          <div className="payment-option">
            <input type="radio" name="payment-method" id="zalopay" />
            <label htmlFor="zalopay">
              <span className="payment-icon"><i className="bi bi-chat-dots" /></span>
              <span className="payment-label">ZaloPay</span>
            </label>
          </div>

          <div className="payment-option">
            <input type="radio" name="payment-method" id="vnpay" />
            <label htmlFor="vnpay">
              <span className="payment-icon"><i className="bi bi-qr-code" /></span>
              <span className="payment-label">VNPay QR</span>
            </label>
          </div>
        </div>

        <div className="payment-details" id="cod-details">
          <p className="payment-info">Bạn sẽ thanh toán trực tiếp cho nhân viên giao hàng khi nhận hàng.</p>
        </div>

        <div className="payment-details d-none" id="bank-transfer-details">
          <p className="payment-info">
            Vui lòng chuyển khoản đến tài khoản sau:<br />
            <strong>Ngân hàng:</strong> Vietcombank<br />
            <strong>Số tài khoản:</strong> 123456789<br />
            <strong>Chủ tài khoản:</strong> Nguyễn Văn A<br />
            <em>Nội dung: Thanh toán đơn hàng #12345</em>
          </p>
        </div>

        <div className="payment-details d-none" id="momo-details">
          <p className="payment-info">Bạn sẽ được chuyển hướng sang ứng dụng MoMo để hoàn tất thanh toán.</p>
        </div>

        <div className="payment-details d-none" id="zalopay-details">
          <p className="payment-info">Bạn sẽ được chuyển hướng sang ứng dụng ZaloPay để hoàn tất thanh toán.</p>
        </div>

        <div className="payment-details d-none" id="vnpay-details">
          <p className="payment-info">
            Quét mã QR bằng ứng dụng ngân hàng hoặc ví điện tử để thanh toán qua VNPay.
          </p>
        </div>
      </div>
    </div>
  );
};
