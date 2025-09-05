export const ForgotPasswordForm = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-register">
              Gửi yêu cầu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
