import { SidebarPage } from "../utils/SidebarPage";
import { TopbarPage } from "../utils/TopbarPage";

export const AdminPage = () => {
  return (
    <div className="admin-layout-admin">
      <SidebarPage />

      <main className="main-admin">
        <TopbarPage />
        
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
