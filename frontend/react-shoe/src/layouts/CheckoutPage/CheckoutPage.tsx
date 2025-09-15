import { PageTitle } from "../utils/PageTitle";
import { TermAndPrivacyModal } from "../utils/TermAndPrivacyModal";
import { CheckoutForm } from "./components/CheckoutForm";
import { OrderSummary } from "./components/OrderSummary";

export const CheckoutPage = () => {
  return (
    <main className="main">
      <PageTitle
        title="Thanh toán"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Thanh toán" },
        ]}
      />
      <section id="checkout" className="checkout section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-7">
              <CheckoutForm />
            </div>
            <div className="col-lg-5">
              <OrderSummary />
            </div>
          </div>
          <TermAndPrivacyModal />
        </div>
      </section>
    </main>
  );
};
