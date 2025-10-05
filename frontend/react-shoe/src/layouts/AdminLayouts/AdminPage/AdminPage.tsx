export const AdminPage = () => {
  return (
    <div className="admin-layout-admin">
      <aside className="sidebar-admin">
        <div className="brand-logo-mini-admin">
          <img src="image/logo.png" alt="logo" />
        </div>
        <div className="sidebar-title-admin">
          <h2>Litte Whale</h2>
        </div>

        <div className="user-profile-section-admin">
          <img
            className="user-avatar-admin"
            src="image/avatar-admin.png"
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
            <a className="menu-link-admin" href="#">
              <i className="fa fa-box menu-icon-admin" />{" "}
              <span>Quản lý sản phẩm</span>
            </a>
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

      <main className="main-admin">
        <div className="topbar-admin d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-light d-md-none"
              aria-label="Toggle sidebar"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="search-input-admin">
              <input className="form-control" placeholder="Search products" />
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a className="nav-link text-white" href="#">
              <i className="fa-solid fa-plus" /> Thêm sản phẩm mới
            </a>
            <a className="nav-link text-white" href="#">
              <i className="fa-solid fa-message" /> Tin Nhắn{" "}
              <span className="badge bg-danger">0</span>
            </a>
            <a className="nav-link text-white" href="#">
              <i className="fa-solid fa-bell" /> Thông Báo{" "}
              <span className="badge bg-danger">0</span>
            </a>
            <div className="profile-container-admin d-flex align-items-center">
              <img
                className="profile-pic-admin rounded-circle"
                src="https://anhcute.net/wp-content/uploads/2024/09/Hinh-anh-chibi-Spiderman-sieu-dang-yeu.jpg"
                alt="profile"
                width={36}
                height={36}
              />
              <span className="profile-name-admin ms-2">AdminName</span>
            </div>
          </div>
        </div>

        <div className="header-overview-admin">Bảng điều khiển</div>

        <div className="stats-row-admin">
          <div className="stat-card-admin">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="muted-admin">Tổng khách hàng:</div>
                <div className="value-admin">56 khách hàng</div>
              </div>
              <div className="icon-admin">
                <i className="fa fa-user" />
              </div>
            </div>
          </div>

          <div className="stat-card-admin">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="muted-admin">Tổng sản phẩm:</div>
                <div className="value-admin">1850 sản phẩm</div>
              </div>
              <div className="icon-admin">
                <i className="fa fa-boxes" />
              </div>
            </div>
          </div>

          <div className="stat-card-admin">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="muted-admin">Tổng đơn hàng:</div>
                <div className="value-admin">247 đơn hàng</div>
              </div>
              <div className="icon-admin">
                <i className="fa fa-cart-shopping" />
              </div>
            </div>
          </div>

          <div className="stat-card-admin">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="muted-admin">Sản phẩm bán chạy (6 tháng):</div>
                <div className="value-admin">1000 sản phẩm</div>
              </div>
              <div className="icon-admin">
                <i className="fa fa-chart-line" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-table-admin">
          <h5 className="mb-3">Tình trạng đơn hàng</h5>

          <div className="table-responsive">
            <table className="admin-table table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên khách hàng</th>
                  <th>Tổng tiền</th>
                  <th>Hình thức thanh toán</th>
                  <th>Ngày bắt đầu</th>
                  <th>Trạng thái</th>
                  <th>Tính năng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AL3947</td>
                  <td>Phạm Thị Ngọc</td>
                  <td>19.770.000 đ</td>
                  <td>Thẻ tín dụng</td>
                  <td>2024-11-01</td>
                  <td>
                    <span className="status-label-admin pending-admin">
                      Chờ xử lý
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit-admin" title="Sửa">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn-trash-admin" title="Xóa">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>ER3835</td>
                  <td>Nguyễn Thị Mỹ Yến</td>
                  <td>16.770.000 đ</td>
                  <td>Thanh toán khi nhận hàng</td>
                  <td>2024-11-02</td>
                  <td>
                    <span className="status-label-admin in-transit-admin">
                      Đang vận chuyển
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit-admin" title="Sửa">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn-trash-admin" title="Xóa">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>MD0837</td>
                  <td>Triệu Thanh Phú</td>
                  <td>9.400.000 đ</td>
                  <td>Ví điện tử</td>
                  <td>2024-11-03</td>
                  <td>
                    <span className="status-label-admin completed-admin">
                      Đã hoàn thành
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit-admin" title="Sửa">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn-trash-admin" title="Xóa">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>MT9835</td>
                  <td>Đặng Hoàng Phúc</td>
                  <td>40.650.000 đ</td>
                  <td>Chuyển khoản ngân hàng</td>
                  <td>2024-11-04</td>
                  <td>
                    <span className="status-label-admin cancelled-admin">
                      Đã hủy
                    </span>
                  </td>
                  <td>
                    <button className="btn-edit-admin" title="Sửa">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn-trash-admin" title="Xóa">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
