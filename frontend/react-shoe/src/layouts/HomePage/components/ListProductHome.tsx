export const ListProductHome = () => {
  return (
    <section id="best-sellers" className="best-sellers section py-5">
      <div className="container text-center mb-4">
        <h2>Sản phẩm bán chạy</h2>
        <p>
          Những mẫu giày thể thao và thời trang được khách hàng yêu thích nhất
          tại cửa hàng
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Product 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="product-item p-3 border rounded text-center position-relative h-100">
              <div className="product-badge bg-dark text-white px-2 py-1 position-absolute top-0 start-0 m-2 rounded">
                Giới hạn
              </div>

              {/* Nút hover */}
              <div className="product-overlay d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-dark rounded-pill px-4 mb-2">
                  Chọn Tuỳ Chọn
                </button>
                <div className="product-icons d-flex flex-column gap-2">
                  <button className="btn btn-light rounded-circle shadow-sm">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="btn btn-light rounded-circle shadow-sm">
                    <i className="bi bi-shuffle"></i>
                  </button>
                  <button className="btn btn-light rounded-circle shadow-sm">
                    <i className="bi bi-eye"></i>
                  </button>
                </div>
              </div>

              <img
                src={require("../../../images/product/product-1.webp")}
                className="img-fluid mb-3"
                alt="Giày Sneaker Trắng Classic"
              />
              <p className="text-muted small text-uppercase">
                Bộ sưu tập cao cấp
              </p>
              <h6 className="fw-bold">Giày Sneaker Trắng Classic</h6>
              <div className="text-warning mb-1">
                ★★★★☆ <span className="text-muted small">(24)</span>
              </div>
              <p className="fw-bold text-danger">1.890.000₫</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="product-item p-3 border rounded text-center position-relative h-100">
              <div className="product-badge bg-danger text-white px-2 py-1 position-absolute top-0 start-0 m-2 rounded">
                Giảm 25%
              </div>
              <img
                src={require("../../../images/product/product-4.webp")}
                className="img-fluid mb-3"
                alt="Giày Thể Thao Đen Urban"
              />
              <p className="text-muted small text-uppercase">Bán chạy</p>
              <h6 className="fw-bold">Giày Thể Thao Đen Urban</h6>
              <div className="text-warning mb-1">
                ★★★★★ <span className="text-muted small">(38)</span>
              </div>
              <p>
                <span className="text-muted text-decoration-line-through me-2">
                  2.400.000₫
                </span>
                <span className="fw-bold text-danger">1.800.000₫</span>
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="product-item p-3 border rounded text-center position-relative h-100">
              <div className="product-badge bg-warning text-dark px-2 py-1 position-absolute top-0 start-0 m-2 rounded">
                Hàng mới về
              </div>
              <img
                src={require("../../../images/product/product-7.webp")}
                className="img-fluid mb-3"
                alt="Giày Sneaker Pastel Breeze"
              />
              <p className="text-muted small text-uppercase">Hàng mới về</p>
              <h6 className="fw-bold">Giày Sneaker Pastel Breeze</h6>
              <div className="text-warning mb-1">
                ★★★☆☆ <span className="text-muted small">(12)</span>
              </div>
              <p className="fw-bold">950.000₫</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="product-item p-3 border rounded text-center position-relative h-100">
              <div className="product-badge bg-primary text-white px-2 py-1 position-absolute top-0 start-0 m-2 rounded">
                Xu hướng
              </div>
              <img
                src={require("../../../images/product/product-10.webp")}
                className="img-fluid mb-3"
                alt="Giày Thể Thao Tím Vibe"
              />
              <p className="text-muted small text-uppercase">Dòng thiết kế</p>
              <h6 className="fw-bold">Giày Thể Thao Tím Vibe</h6>
              <div className="text-warning mb-1">
                ★★★★★ <span className="text-muted small">(56)</span>
              </div>
              <p className="fw-bold">1.650.000₫</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#more-info" className="btn btn-dark btn-lg rounded-pill">
            Xem thêm
          </a>
        </div>
      </div>
    </section>
  );
};
