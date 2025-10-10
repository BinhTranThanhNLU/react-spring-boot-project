import { Link } from "react-router-dom";
import { PageTitle } from "../utils/PageTitle";

export const ErrorPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="403"
        breadcrumbs={[{ label: "Trang chủ", path: "/home" }, { label: "403" }]}
      />

      <section id="error-404" className="error-404 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center">
            <div
              className="error-icon mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <i className="bi bi-exclamation-circle"></i>
            </div>

            <h1
              className="error-code mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              403
            </h1>

            <h2
              className="error-title mb-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Ồ! Không tìm thấy trang
            </h2>

            <p
              className="error-text mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Trang bạn đang tìm kiếm có thể đã bị xóa, đã đổi tên hoặc tạm thời
              không khả dụng.
            </p>

            <div
              className="search-box mb-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <form action="#" className="search-form">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm trang..."
                    aria-label="Search"
                  />
                  <button className="btn search-btn" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>

            <div
              className="error-action"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link to="/home" className="btn btn-primary">
                Quay lại Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
