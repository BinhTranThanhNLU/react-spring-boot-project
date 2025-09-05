import { DecorativeElements } from "../utils/DecorativeElements";
import { FormHeader } from "../utils/FormHeader";
import { PageTitle } from "../utils/PageTitle";
import { ResetPasswordForm } from "./components/ResetPasswordForm";

export const ResetPasswordPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="Đặt lại mật khẩu"
        breadcrumbs={[
          { label: "Trang chủ", path: "/" },
          { label: "Đặt lại mật khẩu" },
        ]}
      />

      <section id="register" className="register section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="registration-form-wrapper">
                <FormHeader headerMessage="Đặt lại mật khẩu" message="Hãy nhập lại mật khẩu mới mà bạn thích"/>
                <ResetPasswordForm />
                <DecorativeElements />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
