export const RelatedProductsCarousel = () => {
  return (
    <div
      id="relatedProductsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="../../assets/img/product/product-1.webp"
                    className="main-image img-fluid"
                    alt="Adidas"
                  />
                </div>
                <div className="product-details">
                  <div className="product-category">ADIDAS</div>
                  <h6 className="product-title">
                    Giày Sneaker Nữ Adidas Barreda Decode - Hồng
                  </h6>
                  <div className="product-price">2.000.000₫</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="../../assets/img/product/product-1.webp"
                    className="main-image img-fluid"
                    alt="Hoka Red"
                  />
                </div>
                <div className="product-details">
                  <div className="product-category">HOKA</div>
                  <h6 className="product-title">
                    Giày Sneaker Unisex HOKA Mafate Speed 2 - Đỏ
                  </h6>
                  <div className="product-price">4.199.000₫</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="../../assets/img/product/product-1.webp"
                    className="main-image img-fluid"
                    alt="Hoka White"
                  />
                </div>
                <div className="product-details">
                  <div className="product-category">HOKA</div>
                  <h6 className="product-title">
                    Giày Sneaker Unisex HOKA Mafate Speed 2 - Trắng
                  </h6>
                  <div className="product-price">4.199.000₫</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="../../assets/img/product/product-1.webp"
                    className="main-image img-fluid"
                    alt="Puma Black"
                  />
                </div>
                <div className="product-details">
                  <div className="product-category">PUMA</div>
                  <h6 className="product-title">
                    Giày Sneaker Unisex Puma Speedcat Leather - Đen
                  </h6>
                  <div className="product-price">2.800.000₫</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="../../assets/img/product/product-1.webp"
                    className="main-image img-fluid"
                    alt="Puma White"
                  />
                </div>
                <div className="product-details">
                  <div className="product-category">PUMA</div>
                  <h6 className="product-title">
                    Giày Sneaker Unisex Puma Speedcat Leather - Trắng
                  </h6>
                  <div className="product-price">2.800.000₫</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#relatedProductsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#relatedProductsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};
