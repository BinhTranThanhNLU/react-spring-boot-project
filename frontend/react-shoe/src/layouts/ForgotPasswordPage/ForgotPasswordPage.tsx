import { DecorativeElements } from "../utils/DecorativeElements";
import { PageTitle } from "../utils/PageTitle";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";
import { FormHeader } from "../utils/FormHeader";


export const ForgotPasswordPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="Quên mật khẩu"
        breadcrumbs={[
          { label: "Trang chủ", path: "/" },
          { label: "Quên mật khẩu" },
        ]}
      />

      <section id="register" className="register section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="registration-form-wrapper">
                <FormHeader headerMessage="Quên mật khẩu" message="Hãy nhập email của bạn"/>
                <ForgotPasswordForm />
                <DecorativeElements />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
