import React from "react";
import { OrderCard } from "./OrderCard";
import { Pagination } from "./Pagination";
import { OrderTabProps } from "../../../types/AccountProps";

export const OrderTab: React.FC<OrderTabProps> = ({ orders }) => {
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
        {orders && orders.length > 0 ? (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <div className="alert alert-info text-center my-4" role="alert">
            <i className="bi bi-cart-x fs-4 me-2"></i>
            Bạn chưa có đơn hàng nào!
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
};
