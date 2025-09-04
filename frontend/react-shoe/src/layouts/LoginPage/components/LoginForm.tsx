import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/config";
import { LoginRequest } from "../../../models/LoginRequest";
import { LoginResponse } from "../../../models/LoginResponse";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const request: LoginRequest = {email, password};

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập thất bại");
      }

      const data: LoginResponse = await response.json();

      // Lưu token và user vào localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    } catch (error:any) {
      setError(error.message);
    }
  }

  return (
    <div className="auth-form login-form active">
      <div className="form-header">
        <h3>Chào mừng trở lại</h3>
        <p>Đăng nhập vào tài khoản của bạn</p>
      </div>

      <form className="auth-form-content" onSubmit={handleSubmit}>
        <AuthInput
          type="email"
          placeholder="Email"
          icon="bi-envelope"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          icon="bi-lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-danger">{error}</p>}

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
