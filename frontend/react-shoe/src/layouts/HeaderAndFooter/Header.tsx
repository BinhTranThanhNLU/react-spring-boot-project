import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../models/Category";
import { API_BASE_URL } from "../../config/config";
import { Brand } from "../../models/Brand";
import { SpinningLoading } from "../utils/SpinningLoading";

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = `${API_BASE_URL}/categories`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong !!!");

        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) return <SpinningLoading />;

  return (
    <header id="header" className="header sticky-top">
      {/* Top Bar */}
      <div className="top-bar py-2">
        <div className="container-fluid container-xl">
          <div className="row align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <div className="top-bar-item">
                <i className="bi bi-telephone-fill me-2"></i>
                <span>Liên lạc với chúng tôi: </span>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 text-center">
              <div className="announcement-slider">
                <div className="slider">
                  🚚 Miễn phí vận chuyển cho đơn hàng trên 1.000.000 đồng.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container-fluid container-xl">
          <div className="d-flex py-3 align-items-center justify-content-between">
            {/* Logo */}
            <Link to="/home" className="logo d-flex align-items-center">
              <h1 className="sitename">SportShoe</h1>
            </Link>

            {/* Search */}
            <form className="search-form desktop-search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm sản phẩm..."
                />
                <button className="btn" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* Actions */}
            <div className="header-actions d-flex align-items-center justify-content-end">
              {/* Mobile Search Toggle */}
              <button
                className="header-action-btn mobile-search-toggle d-xl-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileSearch"
                aria-expanded="false"
                aria-controls="mobileSearch"
              >
                <i className="bi bi-search"></i>
              </button>

              {/* Account */}
              <div className="dropdown account-dropdown">
                <button className="header-action-btn" data-bs-toggle="dropdown">
                  <i className="bi bi-person"></i>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <h6>
                      Chào mừng{" "}
                      <span className="sitename">
                        đến với Cửa hàng SportShoe
                      </span>
                    </h6>
                    <p className="mb-0">Quản lý tài khoản &amp; đơn hàng</p>
                  </div>
                  <div className="dropdown-body">
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages/user/account.html"
                    >
                      <i className="bi bi-person-circle me-2"></i>
                      <span>Hồ sơ của tôi</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages/user/account.html"
                    >
                      <i className="bi bi-bag-check me-2"></i>
                      <span>Đơn hàng của tôi</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages/user/account.html"
                    >
                      <i className="bi bi-heart me-2"></i>
                      <span>Danh sách mong muốn của tôi</span>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="pages/user/account.html"
                    >
                      <i className="bi bi-gear me-2"></i>
                      <span>Cài đặt</span>
                    </a>
                  </div>
                  <div className="dropdown-footer">
                    <a
                      href="pages/auth/register.html"
                      className="btn btn-primary w-100 mb-2"
                    >
                      Đăng nhập
                    </a>
                    <a
                      href="pages/auth/register.html"
                      className="btn btn-outline-primary w-100"
                    >
                      Đăng ký
                    </a>
                  </div>
                </div>
              </div>

              {/* Wishlist */}
              <a
                href="pages/user/account.html"
                className="header-action-btn d-none d-md-block"
              >
                <i className="bi bi-heart"></i>
                <span className="badge">0</span>
              </a>

              {/* Cart */}
              <a href="pages/cart/cart.html" className="header-action-btn">
                <i className="bi bi-cart3"></i>
                <span className="badge">3</span>
              </a>

              {/* Mobile Navigation Toggle */}
              <i className="mobile-nav-toggle d-xl-none bi bi-list me-0"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="header-nav">
        <div className="container-fluid container-xl position-relative">
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/home" className="active">
                  Trang chủ
                </Link>
              </li>
              {/* Render categories động */}
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={category.subCategories?.length ? "dropdown" : ""}
                >
                  <Link to={`/category/${category.id}`}>
                    <span>{category.name}</span>
                    {category.subCategories?.length > 0 && (
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    )}
                  </Link>

                  {category.subCategories?.length > 0 && (
                    <ul>
                      {category.subCategories.map((sub) => (
                        <li key={sub.id}>
                          <Link to={`/category/${sub.id}`}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <a href="pages/info/about.html">Khuyến mãi</a>
              </li>
              <li>
                <a href="pages/info/about.html">Sản phẩm mới</a>
              </li>
              <li>
                <a href="pages/info/about.html">Bán chạy</a>
              </li>
              <li>
                <a href="pages/info/about.html">Về chúng tôi</a>
              </li>
              <li>
                <a href="pages/user/contact.html">Liên hệ</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Search Form */}
      <div className="collapse" id="mobileSearch">
        <div className="container">
          <form className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm"
              />
              <button className="btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};
