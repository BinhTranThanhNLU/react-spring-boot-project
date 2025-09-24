import React, { JSX } from "react";
import { OrderCardProps } from "../../../types/AccountProps";
import { TrackingOrder } from "./TrackingOrder";
import { OrderDetail } from "./OrderDetail";

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("vi-VN");

  const status = order.status.toUpperCase();
  let cardContent: JSX.Element | null = null;

  switch (status) {
    // === Card 1 ===
    case "PENDING":
    case "CONFIRMED":
    case "SHIPPING":
      cardContent = (
        <div className="order-card" data-aos="fade-up" data-aos-delay="100">
          <div className="order-header">
            <div className="order-id">
              <span className="label">Mã đơn hàng:</span>
              <span className="value">#ORD-{order.id}</span>
            </div>
            <div className="order-date">{formatDate(order.createdAt)}</div>
          </div>

          <div className="order-content">
            <div className="product-grid">
              {order.items.map((item) => (
                <img key={item.id} src={item.image} alt="Sản phẩm" loading="lazy" />
              ))}
            </div>
            <div className="order-info">
              <div className="info-row">
                <span>Trạng thái</span>
                <span className="status processing">{order.status}</span>
              </div>
              <div className="info-row">
                <span>Sản phẩm</span>
                <span>{order.items.length} món</span>
              </div>
              <div className="info-row">
                <span>Tổng cộng</span>
                <span className="price">
                  {order.totalAmount.toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
          </div>

          <div className="order-footer">
            <button
              type="button"
              className="btn-track"
              data-bs-toggle="collapse"
              data-bs-target={`#tracking-${order.id}`}
            >
              Theo dõi đơn
            </button>
            <button
              type="button"
              className="btn-details"
              data-bs-toggle="collapse"
              data-bs-target={`#details-${order.id}`}
            >
              Xem chi tiết
            </button>
          </div>

          <TrackingOrder />
          <OrderDetail />
        </div>
      );
      break;

    // === Card 3 ===
    case "DELIVERED":
      cardContent = (
        <div className="order-card" data-aos="fade-up" data-aos-delay="300">
          <div className="order-header">
            <div className="order-id">
              <span className="label">Mã đơn hàng:</span>
              <span className="value">#ORD-{order.id}</span>
            </div>
            <div className="order-date">{formatDate(order.createdAt)}</div>
          </div>

          <div className="order-content">
            <div className="product-grid">
              {order.items.map((item) => (
                <img key={item.id} src={item.image} alt="Sản phẩm" loading="lazy" />
              ))}
            </div>
            <div className="order-info">
              <div className="info-row">
                <span>Trạng thái</span>
                <span className="status delivered">Đã giao</span>
              </div>
              <div className="info-row">
                <span>Sản phẩm</span>
                <span>{order.items.length} món</span>
              </div>
              <div className="info-row">
                <span>Tổng cộng</span>
                <span className="price">
                  {order.totalAmount.toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
          </div>

          <div className="order-footer">
            <button type="button" className="btn-review">Viết đánh giá</button>
            <button type="button" className="btn-details">Xem chi tiết</button>
          </div>
        </div>
      );
      break;

    // === Card 4 ===
    case "CANCELLED":
      cardContent = (
        <div className="order-card" data-aos="fade-up" data-aos-delay="400">
          <div className="order-header">
            <div className="order-id">
              <span className="label">Mã đơn hàng:</span>
              <span className="value">#ORD-{order.id}</span>
            </div>
            <div className="order-date">{formatDate(order.createdAt)}</div>
          </div>

          <div className="order-content">
            <div className="product-grid">
              {order.items.slice(0, 3).map((item) => (
                <img key={item.id} src={item.image} alt="Sản phẩm" loading="lazy" />
              ))}
              {order.items.length > 3 && (
                <span className="more-items">+{order.items.length - 3}</span>
              )}
            </div>
            <div className="order-info">
              <div className="info-row">
                <span>Trạng thái</span>
                <span className="status cancelled">Đã hủy</span>
              </div>
              <div className="info-row">
                <span>Sản phẩm</span>
                <span>{order.items.length} món</span>
              </div>
              <div className="info-row">
                <span>Tổng cộng</span>
                <span className="price">
                  {order.totalAmount.toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
          </div>

          <div className="order-footer">
            <button type="button" className="btn-reorder">Đặt lại</button>
            <button type="button" className="btn-details">Xem chi tiết</button>
          </div>
        </div>
      );
      break;

    default:
      cardContent = null;
      break;
  }

  return <>{cardContent}</>;
};
