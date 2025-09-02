import { AuthInput } from "./AuthInput";

export const LoginForm = () => {
  return (
    <div className="auth-form login-form active">
      <div className="form-header">
        <h3>Chào mừng trở lại</h3>
        <p>Đăng nhập vào tài khoản của bạn</p>
      </div>

      <form className="auth-form-content">
        <AuthInput
          type="email"
          placeholder="Email"
          icon="bi-envelope"
          required
        />
        <AuthInput
          type="password"
          placeholder="Password"
          icon="bi-lock"
          required
        />

        <div className="form-options mb-4">
          <div className="remember-me">
            <input type="checkbox" id="rememberLogin" />
            <label htmlFor="rememberLogin">Remember me</label>
          </div>
          <a href="#" className="forgot-password">
            Quên mật khẩu?
          </a>
        </div>

        <button type="submit" className="auth-btn primary-btn mb-3">
          Đăng nhập
          <i className="bi bi-arrow-right"></i>
        </button>

        <div className="divider">
          <span>hoặc</span>
        </div>

        <button type="button" className="auth-btn social-btn">
          <i className="bi bi-google"></i>
          Tiếp tục với Google
        </button>

        <div className="switch-form">
          <span>Bạn chưa có tài khoản?</span>
          <button type="button" className="switch-btn" data-target="register">
            Tạo tài khoản
          </button>
        </div>
      </form>
    </div>
  );
};
