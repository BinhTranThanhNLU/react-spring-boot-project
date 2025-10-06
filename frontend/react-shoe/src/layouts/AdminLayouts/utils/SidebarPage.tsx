import { Link } from "react-router-dom";

export const SidebarPage = () => {
  return (
    <aside className="sidebar-admin">
      <div className="brand-logo-mini-admin">
        <img
          src="https://anhcute.net/wp-content/uploads/2024/09/Hinh-anh-chibi-Spiderman-sieu-dang-yeu.jpg"
          alt="logo"
        />
      </div>
      <div className="sidebar-title-admin">
        <h2>Litte Whale</h2>
      </div>

      <div className="user-profile-section-admin">
        <img
          className="user-avatar-admin"
          src="https://anhcute.net/wp-content/uploads/2024/09/Hinh-anh-chibi-Spiderman-sieu-dang-yeu.jpg"
          alt="avatar"
        />
        <div className="user-name-admin">AdminName</div>
        <div className="user-greeting-admin">Chào mừng bạn trở lại</div>
      </div>

      <hr style={{ borderColor: "rgba(255,255,255,0.06)" }} />

      <ul className="sidebar-menu-admin">
        <li className="menu-item-admin">
          <a className="menu-link-admin" href="#">
            <i className="fa fa-tachometer-alt menu-icon-admin" />{" "}
            <span>Bảng điều khiển</span>
          </a>
        </li>
        <li className="menu-item-admin">
          <a className="menu-link-admin" href="#">
            <i className="fa fa-users menu-icon-admin" />{" "}
            <span>Quản lý khách hàng</span>
          </a>
        </li>
        <li className="menu-item-admin">
          <Link className="menu-link-admin" to="/admin/manage-product">
            <i className="fa fa-box menu-icon-admin" />{" "}
            <span>Quản lý sản phẩm</span>
          </Link>
        </li>
        <li className="menu-item-admin">
          <a className="menu-link-admin" href="#">
            <i className="fa fa-tasks menu-icon-admin" />{" "}
            <span>Quản lý đơn hàng</span>
          </a>
        </li>
        <li className="menu-item-admin">
          <a className="menu-link-admin" href="#">
            <i className="fa-solid fa-ticket menu-icon-admin" />{" "}
            <span>Quản lý mã giảm giá</span>
          </a>
        </li>
        <li className="menu-item-admin">
          <a className="menu-link-admin" href="#">
            <i className="fa fa-chart-bar menu-icon-admin" />{" "}
            <span>Quản lý danh mục</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};
