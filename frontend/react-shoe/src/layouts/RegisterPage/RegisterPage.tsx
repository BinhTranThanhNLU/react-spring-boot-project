import { PageTitle } from "../utils/PageTitle";
import { DecorativeElements } from "./components/DecorativeElements";
import { RegisterForm } from "./components/RegisterForm";
import { SocialLogin } from "./components/SocialLogin";

export const RegisterPage = () => {
    return (
    <main className="main">
      <PageTitle
        title="Đăng ký"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Đăng ký" },
        ]}
      />

      {/* Register Section */}
      <section id="register" className="register section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="registration-form-wrapper">
                <RegisterForm />
                <SocialLogin />
                <DecorativeElements />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}