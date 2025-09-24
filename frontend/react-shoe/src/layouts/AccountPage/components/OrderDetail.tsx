export const OrderDetail = () => {
  return (
    <div className="collapse order-details" id="details1">
      <div className="details-content">
        <div className="detail-section">
          <h5>Thông tin đơn hàng</h5>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Phương thức thanh toán</span>
              <span className="value">Thẻ tín dụng (**** 4589)</span>
            </div>
            <div className="info-item">
              <span className="label">Phương thức giao hàng</span>
              <span className="value">Giao nhanh (2-3 ngày)</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h5>Sản phẩm (3)</h5>
          <div className="order-items">
            <div className="item">
              <img
                src="../../assets/img/product/product-1.webp"
                alt="Sản phẩm"
                loading="lazy"
              />
              <div className="item-info">
                <h6>Lorem ipsum dolor sit amet</h6>
                <div className="item-meta">
                  <span className="sku">Mã SP: PRD-001</span>
                  <span className="qty">SL: 1</span>
                </div>
              </div>
              <div className="item-price">$899.99</div>
            </div>

            <div className="item">
              <img
                src="../../assets/img/product/product-2.webp"
                alt="Sản phẩm"
                loading="lazy"
              />
              <div className="item-info">
                <h6>Consectetur adipiscing elit</h6>
                <div className="item-meta">
                  <span className="sku">Mã SP: PRD-002</span>
                  <span className="qty">SL: 2</span>
                </div>
              </div>
              <div className="item-price">$599.95</div>
            </div>

            <div className="item">
              <img
                src="../../assets/img/product/product-3.webp"
                alt="Sản phẩm"
                loading="lazy"
              />
              <div className="item-info">
                <h6>Sed do eiusmod tempor</h6>
                <div className="item-meta">
                  <span className="sku">Mã SP: PRD-003</span>
                  <span className="qty">SL: 1</span>
                </div>
              </div>
              <div className="item-price">$129.99</div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h5>Chi tiết giá</h5>
          <div className="price-breakdown">
            <div className="price-row">
              <span>Tạm tính</span>
              <span>$1,929.93</span>
            </div>
            <div className="price-row">
              <span>Phí vận chuyển</span>
              <span>$15.99</span>
            </div>
            <div className="price-row">
              <span>Thuế</span>
              <span>$159.98</span>
            </div>
            <div className="price-row total">
              <span>Tổng cộng</span>
              <span>$2,105.90</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h5>Địa chỉ giao hàng</h5>
          <div className="address-info">
            <p>
              Sarah Anderson
              <br />
              123 Main Street
              <br />
              Apt 4B
              <br />
              New York, NY 10001
              <br />
              Hoa Kỳ
            </p>
            <p className="contact">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};
