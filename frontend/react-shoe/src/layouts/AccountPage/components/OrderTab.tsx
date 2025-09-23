import { OrderCard } from "./OrderCard";
import { Pagination } from "./Pagination";

export const OrderTab = () => {
  return (
    <div className="tab-pane fade show active" id="orders">
      <div className="section-header" data-aos="fade-up">
        <h2>Đơn hàng của tôi</h2>
        <div className="header-actions">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Tìm kiếm đơn hàng..." />
          </div>
          <div className="dropdown">
            <button className="filter-btn" data-bs-toggle="dropdown">
              <i className="bi bi-funnel"></i>
              <span>Lọc</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Tất cả đơn hàng
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Đang xử lý
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Đã vận chuyển
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Đã giao hàng
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Đã hủy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="orders-grid">
        <OrderCard />
      </div>

      <Pagination />
    </div>
  );
};
