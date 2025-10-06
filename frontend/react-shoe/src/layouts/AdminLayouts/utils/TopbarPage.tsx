export const TopbarPage = () => {
  return (
    <div className="topbar-admin d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-light d-md-none" aria-label="Toggle sidebar">
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
  );
};
