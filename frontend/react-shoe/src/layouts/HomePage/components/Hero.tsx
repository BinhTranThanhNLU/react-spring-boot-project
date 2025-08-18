export const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-container d-flex justify-content-between align-items-center">
        {/* Left content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Khám Phá Những Đôi Giày Thể Thao Tuyệt Vời
          </h1>
          <p className="hero-description">
            Bộ sưu tập giày thể thao chất lượng cao, mang đến sự thoải mái và
            phong cách cho mọi hoạt động. Từ bóng đá, chạy bộ đến tập gym, chúng
            tôi có mọi thứ bạn cần với ưu đãi hấp dẫn và giao hàng nhanh chóng.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-dark me-2">
              Mua Ngay
            </a>
            <a href="#categories" className="btn btn-outline-dark">
              Xem Danh Mục
            </a>
          </div>

          <div className="features-list d-flex gap-4 mt-3">
            <div className="feature-item">
              <i className="bi bi-truck"></i> <span>Miễn Phí Giao Hàng</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-award"></i> <span>Cam Kết Chất Lượng</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-headset"></i> <span>Hỗ Trợ 24/7</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-visuals">
          <div className="product-card featured text-center">
            <span className="badge bg-dark rounded-pill">Bán Chạy Nhất</span>
            <img
              src={require("../../../images/product/product-1.webp")}
              alt="Sản phẩm nổi bật"
              className="img-fluid"
            />
            <h4 className="mt-2">Giày Chạy Bộ Cao Cấp</h4>
            <div className="price">
              <span className="sale-price text-danger fw-bold">1.499.000₫</span>{" "}
              <span className="original-price text-muted text-decoration-line-through">
                1.899.000₫
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
