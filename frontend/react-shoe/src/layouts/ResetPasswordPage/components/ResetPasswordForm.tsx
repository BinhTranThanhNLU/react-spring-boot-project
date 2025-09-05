export const ResetPasswordForm = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <form>
          {/* New Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              placeholder="Mật khẩu mới"
              required
              autoComplete="new-password"
            />
            <label htmlFor="newPassword">Mật khẩu mới</label>
          </div>

          {/* Confirm Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              required
              autoComplete="new-password"
            />
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-register">
              Đặt lại mật khẩu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
