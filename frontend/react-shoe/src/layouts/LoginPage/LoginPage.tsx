import { PageTitle } from "../utils/PageTitle";
import { LoginForm } from "./components/LoginForm";

export const LoginPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="Đăng nhập"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Đăng nhập" },
        ]}
      />

      <section id="login" className="login section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="auth-container"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
