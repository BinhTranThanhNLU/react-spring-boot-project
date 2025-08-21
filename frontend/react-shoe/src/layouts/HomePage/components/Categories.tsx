export const Categories = () => {
  return (
    <section id="promo-cards" className="promo-cards section py-5">
      <div className="container">
        <div className="row g-4">
          {/* Left big card */}
          <div className="col-lg-6">
            <div
              className="category-featured p-4 rounded-4 position-relative h-100 overflow-hidden"
              style={{ backgroundColor: "#f3e9f7" }}
            >
              <span className="category-tag fw-bold text-uppercase small px-3 py-1 bg-white rounded-pill mb-3 d-inline-block">
                Xu Hướng Mới
              </span>
              <h2 className="fw-bold">Bộ Sưu Tập Giày Mùa Hè</h2>
              <p className="text-muted">
                Khám phá những mẫu giày thể thao mới nhất, thiết kế thời trang,
                thoải mái và bền bỉ, phù hợp cho mọi hoạt động từ thể thao đến
                dạo phố.
              </p>
              <a href="#" className="btn btn-dark rounded-pill px-4 mt-3">
                Xem Bộ Sưu Tập →
              </a>
              {/* Hình minh họa */}
              <img
                src={require("../../../images/product/product-f-2.webp")}
                alt="Model"
                className="position-absolute bottom-0 end-0"
                style={{
                  height: "80%",
                  objectFit: "contain",
                  maxWidth: "60%",
                }}
              />
            </div>
          </div>

          {/* Right grid cards */}
          <div className="col-lg-6">
            <div className="row g-4 h-100">
              {[
                {
                  title: "Giày Nam",
                  products: "242 sản phẩm",
                  bg: "#d9ecff",
                  img: require("../../../images/product/product-m-5.webp"),
                },
                {
                  title: "Giày Trẻ Em",
                  products: "185 sản phẩm",
                  bg: "#fff0db",
                  img: require("../../../images/product/product-8.webp"),
                },
                {
                  title: "Giày Chạy Bộ",
                  products: "127 sản phẩm",
                  bg: "#ffe4ec",
                  img: require("../../../images/product/product-3.webp"),
                },
                {
                  title: "Phụ Kiện Thể Thao",
                  products: "308 sản phẩm",
                  bg: "#e6fce6",
                  img: require("../../../images/product/product-12.webp"),
                },
              ].map((card, i) => (
                <div key={i} className="col-6 d-flex">
                  <div
                    className="category-card text-start p-3 rounded-4 h-100 w-100 position-relative d-flex flex-column justify-content-between"
                    style={{ backgroundColor: card.bg }}
                  >
                    <div>
                      <h5 className="fw-bold">{card.title}</h5>
                      <p className="text-muted small">{card.products}</p>
                      <a href="#" className="btn btn-link fw-bold p-0">
                        Mua Ngay →
                      </a>
                    </div>
                    <img
                      src={card.img}
                      alt={card.title}
                      className="position-absolute end-0 bottom-0"
                      style={{
                        width: "50%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
