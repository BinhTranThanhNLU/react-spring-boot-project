import { useState } from "react";
import { RegisterRequest } from "../../../models/RegisterRequest";
import { FormHeader } from "./FormHeader";
import { User } from "../../../models/User";
import { API_BASE_URL } from "../../../config/config";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { ErrorMessage } from "../../utils/ErrorMessage";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    fullName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<string | null>(null);

  const [success, setSuccess] = useState<User | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHttpError(null);
    setSuccess(null);

    if (formData.password !== confirmPassword) {
      setHttpError("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Đăng ký thất bại");
      }

      const data: User = await response.json();
      setSuccess(data);
    } catch (err: any) {
      setHttpError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <FormHeader />
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              placeholder="Họ và Tên"
              required
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Họ và Tên</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Xác nhận Password</label>
              </div>
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="termsCheck"
              name="termsCheck"
              required
            />
            <label className="form-check-label" htmlFor="termsCheck">
              Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và{" "}
              <a href="#">Chính sách bảo mật</a>
            </label>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="marketingCheck"
              name="marketingCheck"
            />
            <label className="form-check-label" htmlFor="marketingCheck">
              Tôi muốn nhận thông tin tiếp thị về sản phẩm, dịch vụ và chương
              trình khuyến mãi
            </label>
          </div>

          <div className="d-grid mb-4">
            <button
              type="submit"
              className="btn btn-register"
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý..." : "Tạo tài khoản"}
              {success && (
                <p className="text-success text-center">
                  Đăng ký thành công! Xin chào {success.fullName}.
                </p>
              )}
            </button>
          </div>
          {httpError && <p className="text-danger text-center">{httpError}</p>}

          <div className="login-link text-center">
            <p>
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
