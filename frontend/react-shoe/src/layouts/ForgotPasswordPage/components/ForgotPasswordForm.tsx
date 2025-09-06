import { useState } from "react";
import { API_BASE_URL } from "../../../config/config";

export const ForgotPasswordForm = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      } else {
        setMessage("Có lỗi xảy ra!");
      }
    } catch (err) {
      setMessage("Không thể kết nối server!");
    }
  };


  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-register">
              Gửi yêu cầu
            </button>
          </div>
          {message && <p className="text-success">{message}</p>}
        </form>
      </div>
    </div>
  );
};
